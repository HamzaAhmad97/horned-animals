import react from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';

class App extends react.Component {
  render() {
    return (
      <Container fluid>
        <Header />
        <Main />
        <Footer />
      </Container>
    );
  }
}
export default App;
