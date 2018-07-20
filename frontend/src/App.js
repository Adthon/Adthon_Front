import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import MenuLayout from './components/Menu/MenuLayout';
import MainPage from './pages/MainPage';
import SignIn from './components/SignIn';
import axios from 'axios';

class App extends Component {
  state = {};

  constructor (props) {
    super(props);
  }

  onLoginEvent = () => {
    console.log(this.state);
    axios({
      method: 'post',
      url: 'http://13.209.141.94/user/signin',
      data: {
        id: this.state.email,
        password: this.state.password
      }
    })
      .then((res) => {
        console.log(res);
        console.log(res.data.message);
        if (res.data.message === 'success') {
          console.log(res.data);
          this.setState({
            user: res.data.result
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onEmailChangeHandler = (e) => {
    this.setState({
      email: e.target.value
    });
  };
  onPasswordChangeHandler = (e) => {
    this.setState({
      password: e.target.value
    });
  };

  render () {
    return (
      <Router>
        <React.Fragment>
          <MenuLayout user={this.state.user} />
          <Route
            path="/signIn"
            render={(props) => (
              <SignIn
                doLogin={(user) => this.onLoginEvent(user)}
                onEmailChangeHandler={this.onEmailChangeHandler}
                onPasswordChangeHandler={this.onPasswordChangeHandler}
              />
            )}
          />
          {/* <Route path="/signUp" component={MenuContainer} /> */}
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
