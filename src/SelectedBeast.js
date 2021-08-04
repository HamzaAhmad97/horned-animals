import react from 'react';
import { Modal, Button, Image } from 'react-bootstrap';

class SelectedBeadt extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMod: this.props.sh,
    };
  }

  hideModal = () => {
    this.setState({ showMod: false });
    this.props.hide();
  }

  render() {
    return (
      <Modal show={this.props.sh}>
        <Modal.Header>
          <Modal.Title className='align-middle'>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={this.props.url} fluid></Image>
          <div>{this.props.desc}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.hideModal}>Hide</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeadt;
