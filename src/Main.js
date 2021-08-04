import react from 'react';
import HornedBeasts from './HornedBeasts';
import 'bootstrap/dist/css/bootstrap.min.css';
class Main extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      hrns: this.props.hornsVal
    };
  }
  modalShow = (e) => {
    this.props.showM(e);
  };

  render() {
    return (
      <div className='beasts container-fluid d-flex justify-content-center flex-wrap flex-row ml-0 mr-0'>
        {this.props.dataArr
          .filter((itm) => {
            // console.log(itm.horns, ' ', this.state.hrns);
            if (Number(this.props.hornsVal) === 0) {
              return true;
            }
            return itm.horns === Number(this.props.hornsVal);
          })
          .map((item, i) => {
            return (
              <HornedBeasts
                title={item.title}
                imageUrl={item.image_url}
                description={item.description}
                keyword={item.keyword}
                horns={item.horns}
                key={i}
                showMod={this.modalShow}
              />
            );
          })}
        ;
      </div>
    );
  }
}

export default Main;
