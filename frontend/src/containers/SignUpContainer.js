import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class SignUpContainer extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  };

  _handleSubmit = (event) => {
    event.preventDefault();
    let { email, password } = this.state;
    try {
      axios
        .post('http://13.209.141.94/user/signup ', { id: email, password })
        .then(({ data }) => {
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  _handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  _handleChangeEmaill = (event) => {
    this.setState({ email: event.target.value });
  };

  _handleChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  render () {
    return (
      <div className="bodycontain">
      <div class="container" >
      <div class="middlecon">
      <div className="middle-box text-center loginscreen   animated fadeInDown">
        <div>
          <div>
            <h1 className="logo-name">Adthon</h1>
          </div>
          <p>새로운 계정 만들기</p>
          <div onSubmit={this._handleSubmit} className="m-t">
            <div className="form-group">
              <input
                type="text"
                className="form-control fbox"
                autoComplete="false"
                placeholder="Name"
                required
                value={this.state.name}
                onChange={this._handleChangeName}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control fbox"
                autoComplete="false"
                placeholder="Email"
                required
                value={this.state.email}
                onChange={this._handleChangeEmaill}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control fbox"
                autoComplete="false"
                placeholder="Password"
                required
                value={this.state.password}
                onChange={this._handleChangePassword}
              />
            </div>

            <button type="submit" className="btn btn-primary block full-width m-b">
              회원가입
            </button>

            <p className="text-muted text-center">
              <small>이미 계정이 있으신가요?</small>
            </p>
            <Link className="btn btn-sm btn-white btn-block" to="/signIn">
              로그인
            </Link>
          </div>
          <p className="m-t">
            {' '}
            <small>AWS AMATHON 1th Team1 &copy; 2018</small>{' '}
          </p>
        </div>
        </div> 
        <div class="imgbox">
        <img src="/rightimg.png"/>
            </div>
      </div>
      </div>
      </div>
    );
  }
}

export default SignUpContainer;
