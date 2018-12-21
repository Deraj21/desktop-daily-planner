import React from 'react';
import { Route } from 'react-router-dom';

import DailyView from './Components/DailyView';
import Header from './Components/Header';
import Login from './Components/Login';
import MonthlyView from './Components/MonthlyView';
import CombinedView from './Components/CombinedView';

export default (
  <div className="Router">
    <Route exact path="/" component={Login}/>
    <Route path="/h/" component={Header}/>
    <Route path="/h/day/:date" component={DailyView}/>
    <Route path="/h/month/:date" component={MonthlyView}/>
    <Route path="/h/both/:date" component={CombinedView} />
  </div>
);
