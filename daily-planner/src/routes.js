import React from 'react';
import { Route } from 'react-router-dom';

import DailyView from './Components/DailyView';
import Header from './Components/Header';
import Login from './Components/Login';
import MonthlyView from './Components/MonthlyView';

export default (
  <div>
    <Route exact path="/" component={Login}/>
    <Route path="/h/day/:date" component={DailyView}/>
    <Route path="/h/" component={Header}/>
    <Route path="/h/month/:date" component={MonthlyView}/>
  </div>
)