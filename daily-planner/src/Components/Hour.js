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

    this.handleClickOut = this.handleClickOut.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    let outside = document.querySelector('.DailyView');
    outside.addEventListener('mousedown', this.handleClickOut);
  }

  handleClickOut(){
    let { id } = this.props;
    let input = document.querySelector('.input-'+id);
    let text = document.querySelector('.text-'+id);
    input.classList.add('hidden');
    text.classList.remove('hidden');
  }

  handleClick(e){
    let { id } = this.props;
    let input = document.querySelector('.input-'+id);
    let text = document.querySelector('.text-'+id);
    text.classList.add('hidden');
    input.classList.remove('hidden');
    input.focus();
  }
  
  handleChange(e){
    this.setState({ val: e.target.value });
  }
  
  render() {
    let { editing, val } = this.state;
    let { id } = this.props;

    return (
      <div onClick={e => this.handleClick(e)} className={`Hour hr-${id}`}>
          <input className={'hidden input-'+id} onChange={e => this.handleChange(e)} value={val} type="text" />
          <p className={'text-'+id}>{val}</p>
      </div>
    );
  }
  
}
