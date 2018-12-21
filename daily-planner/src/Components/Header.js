import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BackArrow, MenuButton } from './Icons';
import Menu from './Menu';
import { connect } from 'react-redux';
import { updateDate } from '../ducks/reducer';

const isMonthlyView = true;

class Header extends Component {

  showMenu(e){
    let menu = document.querySelector('.Menu');
    menu.classList.remove('hidden-menu');
  }

  render(){
    let { currentDate } = this.props;
    let { year, monthName, day, weekDay } = currentDate;
    
    return (
      <div className="Header shadow">
        <Menu />
        <div className="icon-box">
          {
            isMonthlyView
            ?
            <div onClick={e => this.showMenu(e)}><MenuButton /></div>
            :
            <Link to="/h/month"><BackArrow /></Link>
          }
        </div>
        <div className="date">
          <h2>{weekDay}</h2>
          <h1>{day}</h1>
          <h3>{monthName}, {year}</h3>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  let { currentDate } = state;
  return { currentDate }
}

export default connect(mapStateToProps, { updateDate })(Header);