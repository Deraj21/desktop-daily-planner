import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCurrentBackgroundColor } from '../ducks/reducer';

const COLORS = [
  'lightsalmon', 'lemonchiffon', 'peachpuff', 'gainsboro', 'lavenderblush',
  'palegreen', 'lightcyan', 'aquamarine', 'lavender', 'cornsilk',
  'khaki', 'plum', 'mediumaquamarine', 'navajowhite', 'darkgray'
];

class ChangeColor extends Component {
  constructor(){
    super();

    this.state = {
      isFullSize: false
    };
  }

  openFullSize(){
    this.setState({ isFullSize: true })
  }

  closeFullSize(){
    this.setState({ isFullSize: false })
  }

  save(){
    this.closeFullSize();
  }

  changeColor(e){
    let newColor = e.target.style.backgroundColor;
    this.props.updateCurrentBackgroundColor( newColor );
    console.log(newColor);
  }

  render(){
    
    let { isFullSize } = this.state;
  
    let colors = COLORS.map( (color, i) => {
      return (
        <div onClick={e => this.changeColor(e)} className="color" style={{ backgroundColor: color }} key={`color-${i}`}></div>
      );
    })
  
    return ( isFullSize ? 
      <li className="ChangeColor menu-item">
        <p onClick={() => this.closeFullSize()} >Change Color</p>
        <div className="colors">
          { colors }
        </div>
        <span onClick={() => this.save()}>save current color</span>
      </li>
      :
      <li onClick={() => this.openFullSize()} className="menu-item"><p>Change Color</p></li>
    );
  }
}



export default connect(null, { updateCurrentBackgroundColor })(ChangeColor);
