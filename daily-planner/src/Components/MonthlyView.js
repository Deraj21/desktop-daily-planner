import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateIsMonthlyView, updateDate } from '../ducks/reducer';
import Day from './Day';

const data = [ 
  [ 25, 26, 27, 28, 29, 30,  1 ],
  [  2,  3,  4,  5,  6,  7,  8 ],
  [  9, 10, 11, 12, 13, 14, 15 ],
  [ 16, 17, 18, 19, 20, 21, 22 ],
  [ 23, 24, 25, 26, 27, 28, 29 ],
  [ 30, 31,  1,  2,  3,  4,  5 ]
]

class MonthlyView extends Component {
  constructor(props){
    super(props);

    this.changeView = this.changeView.bind(this);
  }

  changeView(date){
    this.props.updateIsMonthlyView(false);
    // add updateDate() here once hooked up to server
  }

  render () {

    let month = data.map((week, row) => {
      let days = week.map((day, col) => {
        return (
          <Day changeView={this.changeView} day={day} key={row+'-'+col} />
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
  let { isMonthlyView, currentDate } = state;
  return { isMonthlyView, currentDate };
}

export default connect(mapStateToProps, { updateIsMonthlyView, updateDate })(MonthlyView);