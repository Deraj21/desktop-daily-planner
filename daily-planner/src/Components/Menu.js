import React, { Component } from 'react';
import { ExitIcon } from './Icons';
import ChangeColor from './ChangeColor';

// dummy data
const first_name = "Jared",
      last_name = "Tanner",
      email = "deraj21@gmail.com";

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

        <div className="profile">
          <img alt="profile" src={`https://www.robohash.org/${first_name+last_name}?set=set4`}/>
          <h3>{first_name} {last_name}</h3>
        </div>

        <ul className="items">
          <li className="menu-item"><p>Logout</p></li>
          <ChangeColor />
          <li className="menu-item"><p>Menu Item</p></li>
          <li className="menu-item"><p>Menu Item</p></li>
        </ul>
      </div>
    );
  }
}