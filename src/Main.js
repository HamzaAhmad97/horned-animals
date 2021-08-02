import react from 'react';
import HornedBeasts from './HornedBeasts';
import data from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
class Main extends react.Component {
  render() {
    return (
      <div className='beasts container-fluid d-flex justify-content-center flex-wrap'>
        {data.map((item) => {
          return (
            <HornedBeasts
              title={item.title}
              imageUrl={item.image_url}
              description={item.description}
              keyword={item.keyword}
              horns={item.horns}
            />
          );
        })}
        ;
      </div>
    );
  }
}

export default Main;
