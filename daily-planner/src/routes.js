import React from 'react';
import { Route } from 'react-router-dom';

import DailyView from './Components/DailyView';
import Header from './Components/Header';
import Login from './Components/Login';
import MonthlyView from './Components/MonthlyView';

export default (
  <div>
    <Route path="/" component={Header}/>
    <Route exact path="/" component={Login}/>
    <Route path="/day/:date" component={DailyView}/>
    <Route path="/month/:date" component={MonthlyView}/>
  </div>
)