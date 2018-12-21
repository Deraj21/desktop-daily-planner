import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BackArrow, MenuButton } from './Icons';
import Menu from './Menu';

const isMonthlyView = true;

export default class Header extends Component {

  showMenu(e){
    let menu = document.querySelector('.Menu');
    menu.classList.remove('hidden-menu');
  }

  render(){
    
    return (
      <div className="Header shadow">
        <Menu />
        <div className="icon-box">
          {
            isMonthlyView
            ?
            <div onClick={e => this.showMenu(e)}><MenuButton /></div>
            :
            <Link to="/h/month/current"><BackArrow /></Link>
          }
        </div>
        <div className="date">
          <h2>Friday</h2>
          <h1>14</h1>
          <h3>December, 2018</h3>
        </div>
      </div>
    );
  }
}