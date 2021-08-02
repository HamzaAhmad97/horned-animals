import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { Container, row } from "react-bootstrap";

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
      <Container
        className="beast"
        onClick={() => this.updateLikes(this.state.clicked)}
      >
        <row>
          <h2>{this.props.title}</h2>
        </row>
        <row>
          <img
            src={this.props.imageUrl}
            alt={this.props.keyword}
            title={this.props.title}
          />
        </row>
        <row>
          <p>{this.props.description}</p>
        </row>
        <row>
          <strong>Horns: {this.props.horns}</strong>
        </row>
        <row>
          <img src="https://img.icons8.com/color/48/000000/like--v3.png" />
        </row>
        <row>
          <strong>{this.state.clicked}</strong>
        </row>
      </Container>
    );
  }
}
export default HornedBeasts;
