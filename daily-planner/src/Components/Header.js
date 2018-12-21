import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BackArrow, MenuButton } from './Icons';

const isMonthlyView = false;

export default class Header extends Component {

  render(){
    
    return (
      <div className="Header">
        <div className="icon-box">
          {
            isMonthlyView
            ?
            <MenuButton />
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