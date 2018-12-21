import React from 'react';
import DailyView from './DailyView';
import MonthlyView from './MonthlyView';

export default function CombinedView(){

  return (
    <div className="CombinedView">
      <div className="left">
        <MonthlyView />
      </div>
      <div className="right">
        <DailyView />
      </div>
    </div>
  );
}