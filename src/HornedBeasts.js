import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <div
        className="beast col-xl-2 border m-3 d-flex flex-column"
        onClick={() => this.updateLikes(this.state.clicked)}
      >
        <h2 className="text-primary text-center mb-3">{this.props.title}</h2>

        <div >
          <img
            className="img-fluid w-100"
            src={this.props.imageUrl}
            alt={this.props.keyword}
            title={this.props.title}
          />
        </div>
        <div className="row">
          <p>{this.props.description}</p>
        </div>
        <div className="row">
          <strong className="text-center mb-3">Horns: {this.props.horns}</strong>
        </div>
        <div className="row align-bottom m-auto">
          <div className="col">
            <p className=" text-center w-50 h-100 align-middle ">{this.state.clicked}</p>
          </div>
          <div className="col">
            <img src="https://img.icons8.com/color/48/000000/like--v3.png" />
          </div>
        </div>
      </div>
    );
  }
}
export default HornedBeasts;
