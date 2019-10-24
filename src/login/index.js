import React, {Component} from 'react';
import { connect }  from 'react-redux';
import {Link} from 'react-router-dom'
import {LoginWrapper, LoginLeftWrapper, LoginRightWrapper, LoginHeader, LoginForm, LoginInput, LoginButton, SignupLink, SignupClick, SignupTitle, LoginRightTitle} from './styled';

class Login extends Component {
  render(){
    return (
      <div className="App">
        <div>
        <LoginWrapper>
          <LoginLeftWrapper>
            <LoginHeader>
              Login
            </LoginHeader>
            <LoginForm>
              <LoginInput placeholder='Email'/>
              <LoginInput placeholder='Password'/>
              <LoginButton>Login</LoginButton>
            </LoginForm>
            <SignupLink>
              <SignupTitle>Don't have an account?</SignupTitle>
              <SignupClick><Link to={'/register'}>SIGN UP</Link></SignupClick>
            </SignupLink>
          </LoginLeftWrapper>
          <LoginRightWrapper>
            <LoginRightTitle>Welcome Back!</LoginRightTitle>
          </LoginRightWrapper>
        </LoginWrapper>
        </div>
      </div>
    );
  }
}

// const mapState=(state)=>({

// })

// const mapDispatch=(dispatch)=>({

// })


export default Login;
