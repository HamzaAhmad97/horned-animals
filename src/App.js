import react from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
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

  updateShow = (val) => {
    this.setState({ show: val });
  }

  render() {
    return (
      <Container fluid>
        <Header />
        <Main dataArr={data} showM={this.showModal}  />
        <SelectedBeadt
          url={this.state.url}
          desc={this.state.desc}
          title={this.state.title}
          show={this.state.show}
          updateShow={this.updateShow}
        />
        <Footer />
      </Container>
    );
  }
}
export default App;
