import react from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Row, Col } from 'react-bootstrap';
import data from './data.json';
import SelectedBeadt from './SelectedBeast';

class App extends react.Component {
  constructor() {
    super();
    this.state = {
      url: '',
      title: '',
      desc: '',
      show: false,
      hornsVal: 0,
    };
  }
  showModal = (element) => {
    let children = element.target.parentNode.children;
    let url = children[0].getAttribute('src');
    let divChildren = children[1].children;
    let title = divChildren[0].innerHTML;
    let desc = divChildren[1].innerHTML;
    this.setState({
      url: url,
      title: title,
      desc: desc,
      show: true,
    });
  };
  hideModal = () => {
    this.setState({
      show: false,
    });
  }
  passNumberOfHorns = (e) => {
    this.setState({
      hornsVal: e.target.value,
    });
    console.log(this.state.hornsVal);
  };
  render() {
    return (
      <Container fluid>
        <Header />
        <Form>
          <Row className='justify-content-start'>
            <Col className='col-lg-3 text-end mb-3'><label htmlFor='dd' className='font-weight-bold align-middle pt-2 text-primary'>Choose the number of horns:</label></Col>
            <Col className='col-lg-1'>
              <Form.Select defaultValue='0' aria-label='Choose the number of horns:' id='dd' onChange={(e) => this.passNumberOfHorns(e)} className='mb-3'>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='100'>100</option>
                <option value='0'>all</option>
              </Form.Select>
            </Col>
          </Row>
        </Form>
        <Main dataArr={data} showM={this.showModal} hornsVal={this.state.hornsVal}/>
        <SelectedBeadt
          url={this.state.url}
          desc={this.state.desc}
          title={this.state.title}
          sh={this.state.show}
          hide = {this.hideModal}
        />
        <Footer />
      </Container>
    );
  }
}
export default App;
