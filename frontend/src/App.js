import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import MenuLayout from './components/Menu/MenuLayout';
import Main from './components/Main';
import SignIn from './components/SignIn';
import SignUpContainer from './containers/SignUpContainer';
import DashboardContainer from './containers/DashboardContainer';
import axios from 'axios';


class App extends Component {
  state = {
    redirect: false,
    isAdmin: false
  };

  constructor (props) {
    super(props);
  }

  onLoginEvent = () => {
    axios({
      method: 'post',
      url: 'http://13.209.141.94/user/signin',
      data: {
        id: this.state.email,
        password: this.state.password
      }
    })
      .then((res) => {
        if (res.data.message === 'success') {
          const { token, type } = res.data.result;
          localStorage['jwt_token'] = token;
          this.setState({
            user: res.data.result,
            redirect: true,
            isAdmin: type
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
      <div>
        <Router>
          <React.Fragment>
            <MenuLayout user={this.state.user} />
            <Route exact path="/admin" component={DashboardContainer} />

            <Route
              exact
              path="/signIn"
              render={(props) => (
                <SignIn
                  doLogin={(user) => this.onLoginEvent(user)}
                  onEmailChangeHandler={this.onEmailChangeHandler}
                  onPasswordChangeHandler={this.onPasswordChangeHandler}
                />
              )}
            />

            <Route exact path="/signUp" component={SignUpContainer} />

            {this.state.redirect ? <Redirect to="/" /> : null}
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
