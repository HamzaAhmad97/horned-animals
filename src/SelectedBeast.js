import react from 'react';
import { Modal, Button, Image } from 'react-bootstrap';

class SelectedBeadt extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  change = () => {
    this.props.updateShow(this.state.show);
    console.log(this.state.show);
  };
  handleModal = () => {
    this.setState({ show: !this.state.show });
    this.change();
    console.log(this.state.show);
  };
  render() {
    return (
      <Modal show={this.state.show}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={this.props.url} fluid></Image>
          {this.props.desc}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleModal}>Hide</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeadt;
