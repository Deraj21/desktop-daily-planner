import React, { Component } from 'react';
import { ExitIcon } from './Icons';

export default class Menu extends Component {

  hideMenu(e){
    let menu = document.querySelector('.Menu');
    menu.classList.add('hidden-menu');
  }

  render () {
    return (
      <div className="Menu shadow hidden-menu">
        <div  onClick={e => this.hideMenu(e)} className="exit-box">
          <ExitIcon/>
        </div>
        <ul className="items">
          <li className="menu-item"><p>Logout</p></li>
          <li className="menu-item"><p>Change Color</p></li>
          <li className="menu-item"><p>Menu Item</p></li>
          <li className="menu-item"><p>Menu Item</p></li>
        </ul>
      </div>
    );
  }
}