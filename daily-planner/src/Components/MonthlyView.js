import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { updateIsMonthlyView, updateDate, updateMonthData } from '../ducks/reducer';
import Day from './Day';

class MonthlyView extends Component {
  constructor(props){
    super(props);

    this.changeView = this.changeView.bind(this);
  }

  componentDidMount(){
    let { year, month, day } = this.props.currentDate;
    Axios.get(`/api/month/${month}-${day}-${year}`)
      .then(response => {
        console.log(response.data);
        this.props.updateMonthData(response.data);
      })
      .catch( err => console.log(err.message));
  }

  changeView(date){
    this.props.updateIsMonthlyView(false);
    // add updateDate() here once hooked up to server
  }

  render () {
    let { monthData } = this.props;

    let month = monthData.map((week, row) => {
      let days = week.map((item, col) => {
        return (
          <Day changeView={this.changeView} day={item.date} key={row+'-'+col} />
        );
      });
      return (
        <div className="week" key={row}>
          {days}
        </div>
      );
    });

    return (
      <div className="MonthlyView">
        { month }
      </div>
    );
  }
}

function mapStateToProps(state){
  let { isMonthlyView, currentDate, monthData } = state;
  return { isMonthlyView, currentDate, monthData };
}

export default connect(mapStateToProps, { updateIsMonthlyView, updateDate, updateMonthData })(MonthlyView);