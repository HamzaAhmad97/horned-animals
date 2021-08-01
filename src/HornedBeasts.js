import react from 'react';

class HornedBeasts extends react.Component {

  render() {
    return (
      <div className='beast'>
        <h2>{this.props.title}</h2>
        <img src={this.props.imageUrl} alt={this.props.keyword} title = {this.props.title} />
        <p>{this.props.description}</p> 
        <strong>Horns: {this.props.horns}</strong>
      </div>
    )
  }
}
export default HornedBeasts;