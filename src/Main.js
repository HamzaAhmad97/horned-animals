import react from 'react';
import HornedBeasts from './HornedBeasts';
import 'bootstrap/dist/css/bootstrap.min.css';
class Main extends react.Component {
  modalShow = (e) => {
    this.props.showM(e);
  };
 
  render() {
    return (
      <div
        className='beasts container-fluid d-flex justify-content-center flex-wrap'
      >
        {this.props.dataArr.map((item, i) => {
          return (
            <HornedBeasts
              title={item.title}
              imageUrl={item.image_url}
              description={item.description}
              keyword={item.keyword}
              horns={item.horns}
              key={i}
              showMod = {this.modalShow}
            />
          );
        })}
        ;
      </div>
    );
  }
}

export default Main;
