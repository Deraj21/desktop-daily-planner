import React from 'react';
import { BackArrow, MenuButton } from './Icons';

export default function Header() {
  
  return (
    <div className="Header">
      <div className="back-arrow-box">
        <BackArrow />
      </div>
      <div className="date">
        <h2>Friday</h2>
        <h1>14</h1>
        <h3>December, 2018</h3>
      </div>
    </div>
  );
}