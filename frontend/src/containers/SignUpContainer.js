import React, { Component } from 'react';
import axios from 'axios';
class SignUpContainer extends Component {
  state = {
      name:'',
      email:'',
      password:''
  };
    _handleSubmit = (event)=>{
    event.preventDefault();

    let {email, password} = this.state
    // console.log(submitData.name, submitData.email, submitData.password)
    try {axios.post('http://13.209.141.94/user/signup ',{id:email, password})
        .then(({data}) =>{
            console.log(data)
        })
    } catch (error) {
                console.log(error)
            }
    
    //  try {
    //         axios.post(serverURL+'/api/auth/register', {submittedValues})
    //         .then(({ data }) => {
    //             // if (data.email && data._id) {
    //             //   this.setState({ current_user: data });
    //             // } else {
    //             //   return;
    //             // }
    //         });

    //     } catch (error) {
    //         console.log(error)
    //     }
    
    }
    _handleChangeName=(event)=>{
        console.log(this.state.name)

        this.setState(
            {name: event.target.value}
        )
    }
    _handleChangeEmaill=(event)=>{
        console.log(this.state.email)

        this.setState(
            {email: event.target.value}
        )
    }
    _handleChangePassword=(event)=>{
        console.log(this.state.email)
        this.setState(
            {password: event.target.value}
        )
    }
  render () {
      console.log("asdfasdf")
    return (
        <div className="middle-box text-center loginscreen   animated fadeInDown">
            <div>
                <div>
                    <h1 className="logo-name">Adthon</h1>
                </div>
                <p>새로운 계정 만들기</p>                
                <form onSubmit={this._handleSubmit} className="m-t" role="form">
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
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
                            className="form-control" 
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
                            className="form-control" 
                            autoComplete="false"
                            placeholder="Password" 
                            required 
                            value={this.state.password} 
                            onChange={this._handleChangePassword}
                        />
                    </div>
            
                    <button type="submit" className="btn btn-primary block full-width m-b">회원가입</button>

                    <p className="text-muted text-center"><small>이미 계정이 있으신가요?</small></p>
                    <a className="btn btn-sm btn-white btn-block" href="login.html">로그인</a>
                </form>
                <p className="m-t"> <small>AWS AMATHON 1th Team1 &copy; 2018</small> </p>
            </div>
        </div>
    );
  }
}

export default SignUpContainer;


