import react from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends react.Component {

  render() {
    return(
      <>
      <Header/>
      <Main/>
      <Footer/>
      </>
    )
  }
}
export default App;
