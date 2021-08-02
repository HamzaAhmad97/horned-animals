import react from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { Container, row} from "react-bootstrap";
class App extends react.Component {
  render() {
    return (
      <Container fluid>
        <row><Header /></row>
        <row><Main /></row>
        <row><Footer /></row>
      </Container>
    );
  }
}
export default App;
