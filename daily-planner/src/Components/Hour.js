import React, { Component } from 'react';

const data = {

}

export default class Hour extends Component {
  constructor(props){
    super(props)

    this.state = {
      editing: false,
      val: ""
    }
  }

  handleChange(e){
    this.setState({ val: e.target.value });
  }

  render() {
    let { editing, val } = this.state;

    return (
      <div className="Hour">
        {
          editing
          ?
          <input onChange={e => this.handleChange(e)} value={val} type="text" />
          :
          <p>{val}</p>
        }
      </div>
    );
  }
  
}
