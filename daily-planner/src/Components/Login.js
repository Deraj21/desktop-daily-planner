import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {

  render () {
    return (
      <div className="Login">
        <div className="title shadow">
          <h1>Daily Planner</h1>
          </div>
        <div className="login-box">
          <div className="input-boxes">
            <div>
              <input type="text"/> <h3>Username</h3>
            </div>
            <div>
              <input type="password"/> <h3>Password</h3>
            </div>
          </div>
          <Link to="/h/month/current"><button className="shadow"> <h1>Login</h1> </button></Link>
        </div>
      </div>
    );
  }
}