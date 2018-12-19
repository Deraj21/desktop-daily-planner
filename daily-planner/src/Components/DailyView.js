import React, { Component } from 'react';

import Hour from './Hour';

const times = [
  " 6 am", " 7 am", " 8 am", " 9 am", "10 am", "11 am", "12 am", " 1 pm",
  " 2 pm", " 3 pm", " 4 pm", " 5 pm", " 6 pm", " 7 pm", " 8 pm", " 9 pm",
]

export default class DailyView extends Component {

  
  render () {
    let timeBoxes = times.map( (item, i) => (
      <li>
        <p key={i}>{item}</p>
      </li>
    ));

    return (
      <div className="DailyView">
        <ul className="times">
          { timeBoxes }
        </ul>
        <div className="hours">
          <Hour />
          <Hour />
          <Hour />
          <Hour />
          <Hour />
          <Hour />
          <Hour />
          <Hour />
          <Hour />
          <Hour />
          <Hour />
          <Hour />
          <Hour />
          <Hour />
          <Hour />
          <Hour />
        </div>
      </div>
    );
  }
}