import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import MenuContainer from './containers/MenuContainer';
import MainPage from './pages/MainPage';
import SignIn from './components/SignIn';

class App extends Component {
  state = {
    user: {}
  };

  constructor (props) {
    super(props);
  }

  onLoginEvent = (data) => {
    const name = 'aa';
    const password = 'password!';
    this.setState({
      user: {
        name: name,
        password: password
      }
    });
  };

  render () {
    return (
      <Router>
        <React.Fragment>
          <MenuContainer user={this.state.user} />
          <Route path="/signIn" component={SignIn} doLogin={this.onLoginEvent} />
          <Route path="/signUp" component={MenuContainer} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
