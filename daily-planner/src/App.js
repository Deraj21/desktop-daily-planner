import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    let { currentBackgroundColor } = this.props;

    return (
      <div style={{ backgroundColor: currentBackgroundColor }} className="App">
        { routes }
      </div>
    );
  }
}

function mapStateToProps( state ){
  return {
    currentBackgroundColor: state.currentBackgroundColor
  }
}

export default connect(mapStateToProps)(App);
