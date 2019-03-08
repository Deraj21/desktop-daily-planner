import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BackArrow, MenuButton } from './Icons';
import Menu from './Menu';
import { connect } from 'react-redux';
import { updateDate, updateIsMonthlyView } from '../ducks/reducer';

class Header extends Component {

  showMenu(e){
    let menu = document.querySelector('.Menu');
    menu.classList.remove('hidden-menu');
  }

  changeView(){
    this.props.updateIsMonthlyView(true);
  }

  render(){
    let { currentDate, isMonthlyView } = this.props;
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
            <Link onClick={() => this.changeView()} to="/h/month"><BackArrow /></Link>
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
  let { currentDate, isMonthlyView } = state;
  return { currentDate, isMonthlyView }
}

export default connect(mapStateToProps, { updateDate, updateIsMonthlyView })(Header);