import React, { Component } from 'react';

import Hour from './Hour';

export default class DailyView extends Component {

  render () {
    return (
      <div className="DailyView">
        DailyView
        <Hour />
        <Hour />
        <Hour />
      </div>
    );
  }
}