import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Image, Row, Col } from 'react-bootstrap';
class HornedBeasts extends react.Component {
  constructor() {
    super();
    this.state = {
      clicked: 0,
    };
  }

  updateLikes = (clickNum) => {
    clickNum += 1;
    this.setState({
      clicked: clickNum,
    });
  };

  render() {
    return (
      <Card
        className='col-xl-2 m-3 d-flex flex-column position-relative'
        onClick={() => this.updateLikes(this.state.clicked)}
      >
        <Card.Img onClick={this.props.showMod} variant='top' src={this.props.imageUrl} style={{objectFit: 'crop', maxWidth: '100%', maxHeight: '100%'}}/>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>

          <Container className='bg-info '>
            <Row>
              <Col className=' d-flex flex-row-reverse'>
                <Image
                  src='https://img.icons8.com/color/48/000000/like--v3.png'
                  className=' w-50 '
                />
              </Col>
              <Col className=' d-flex flex-row align-items-center'>
                <h2 className=' text-center ml-2'>{this.state.clicked}</h2>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    );
  }
}
export default HornedBeasts;
