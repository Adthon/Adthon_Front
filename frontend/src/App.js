import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import MenuContainer from './containers/MenuContainer';
import MainPage from './pages/MainPage';

class App extends Component {
  render () {
    return (
      <Router>
        <React.Fragment>
          <MenuContainer />
          <Route path="/signIn" component={MenuContainer} />
          <Route path="/signUp" component={MenuContainer} />
          <Route path="/signUp" component={MainPage} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
