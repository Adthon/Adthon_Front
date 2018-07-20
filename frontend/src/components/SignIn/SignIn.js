import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';

class SignIn extends React.Component {
  state = {};

  render () {
    const { doLogin, onEmailChangeHandler, onPasswordChangeHandler } = this.props;
    return (
      <div className="bodycontain">
      <div class="container" >

      <div class="middlecon">

      <div class="middle-box text-center loginscreen animated fadeInDown">
        <div>
          <div>
            <h1 class="logo-name">Adthon</h1>
          </div>
         
          <p>사용자 광고클릭 및 노출 이벤트 추적 대시보드</p>
          <br/>
          <h3>로그인</h3>
          <div class="m-t">
            <div class="form-group">
              <input
                type="email"
                class="form-control fbox"
                placeholder="Username"
                required="true"
                onChange={onEmailChangeHandler}
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control fbox"
                placeholder="Password"
                required="true"
                onChange={onPasswordChangeHandler}
              />
            </div>
            <button
              type="submit"
              class="btn btn-primary block full-width m-b loginbtn"
              onClick={() => doLogin()}
            >
              로그인
            </button>

            <a href="#">
              <small>비밀번호를 잊어버리셨나요?</small>
            </a>
            <p class="text-muted text-center">
              <small>아직 회원이 아니신가요?</small>
            </p>
            <Link class="btn btn-sm btn-white btn-block " to="/signUp">
              회원가입하기
            </Link>
          </div>
          <p class="m-t">
            <small>AWS AMATHON 1th Team1 &copy; 2018</small>{' '}
          </p>
        </div>
      </div>
      </div> 
<div class="imgbox">
<img src="/rightimg.png" />
</div>
</div> </div> 
    );
  }
}

export default SignIn;
