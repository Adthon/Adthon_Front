import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';

class SignIn extends React.Component {
  state = {};

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
    console.log(this.state);
    const { doLogin } = this.props;
    return (
      <div class="middle-box text-center loginscreen animated fadeInDown">
        <div>
          <div>
            <h1 class="logo-name">Adthon</h1>
          </div>
          <h3 />
          <p>사용자 광고클릭 및 노출 이벤트 추적 대시보드</p>
          <h3>로그인</h3>
          <form class="m-t" role="form" action="index.html">
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                placeholder="Username"
                required="true"
                onChange={this.onEmailChangeHandler}
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                required="true"
                onChange={this.onPasswordChangeHandler}
              />
            </div>
            <button type="submit" class="btn btn-primary block full-width m-b">
              로그인
            </button>

            <a href="#">
              <small>비밀번호를 잊어버리셨나요?</small>
            </a>
            <p class="text-muted text-center">
              <small>아직 회원이 아니신가요?</small>
            </p>
            <Link class="btn btn-sm btn-white btn-block" to="/signUp">
              회원가입하기
            </Link>
          </form>
          <p class="m-t">
            {' '}
            <small>AWS AMATHON 1th Team1 &copy; 2018</small>{' '}
          </p>
        </div>
      </div>
    );
  }
}

export default SignIn;
