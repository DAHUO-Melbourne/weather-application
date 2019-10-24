import React, {Component} from 'react';
import { connect }  from 'react-redux';
import {Link} from 'react-router-dom';
import {LoginWrapper, LoginLeftWrapper, LoginRightWrapper, LoginHeader, LoginForm, LoginInput, LoginButton, SignupLink, SignupClick, SignupTitle, LoginRightTitle} from './styled';

class Register extends Component {
  render(){
    return (
      <div className="App">
        <div>
        <LoginWrapper>
          <LoginLeftWrapper>
            <LoginHeader>
              Signup
            </LoginHeader>
            <LoginForm>
              <LoginInput placeholder='Email'/>
              <LoginInput placeholder='Password'/>
              <LoginButton>Login</LoginButton>
            </LoginForm>
            <SignupLink>
              <SignupTitle>Already Have an account?</SignupTitle>
              <SignupClick><Link to={'/login'}>LOGIN</Link></SignupClick>
            </SignupLink>
          </LoginLeftWrapper>
          <LoginRightWrapper>
            <LoginRightTitle>Join Minimus Today!</LoginRightTitle>
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


export default Register;
