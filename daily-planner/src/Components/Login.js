import React, { Component } from 'react';

export default class Login extends Component {

  render () {
    return (
      <div className="Login">
        <div className="title">
          <h1>Daily Planner</h1>
          </div>
        <div className="login-box">
          <div className="input-boxes">
            <div>
              <input type="text"/> <h3>Username</h3>
            </div>
            <div>
              <input type="text"/> <h3>Password</h3>
            </div>
          </div>
          <button><h1>Login</h1></button>
        </div>
      </div>
    );
  }
}