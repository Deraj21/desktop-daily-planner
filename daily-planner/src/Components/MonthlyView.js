import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Day from './Day';

const data = [ 
  [ 25, 26, 27, 28, 29, 30,  1 ],
  [  2,  3,  4,  5,  6,  7,  8 ],
  [  9, 10, 11, 12, 13, 14, 15 ],
  [ 16, 17, 18, 19, 20, 21, 22 ],
  [ 23, 24, 25, 26, 27, 28, 29 ],
  [ 30, 31,  1,  2,  3,  4,  5 ]
]

export default class MonthlyView extends Component {

  render () {

    let month = data.map((week, row) => {
      let days = week.map((day, col) => {
        return (
          <Day day={day} key={row+'-'+col} />
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
