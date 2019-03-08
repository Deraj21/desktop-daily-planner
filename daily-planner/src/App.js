import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateIsDualView } from './ducks/reducer';

class App extends Component {

  onResize(e){
    let width = e.target.innerWidth;
    let { isDualView } = this.props;
    console.log(isDualView);

    if (width >= 830){
      if (!isDualView){
        this.props.updateIsDualView(true);
      }
    } else {
      if (isDualView){
        this.props.updateIsDualView(false)
      }
    }

  }

  componentDidMount(){
    window.addEventListener('resize', e => this.onResize(e));
  }

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
    currentBackgroundColor: state.currentBackgroundColor,
    isDualView: state.isDualView
  }
}

export default withRouter(
  connect(mapStateToProps, { updateIsDualView })(App)
);
