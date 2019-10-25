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
              <LoginInput placeholder='Email' value={this.props.username} onChange={this.props.changeUsername}/>
              <LoginInput placeholder='Password' value={this.props.password} onChange={this.props.changePassword} type= 'password'/>
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

const mapState=(state)=>({
  username:state.getIn(['Login', 'username']),
  password:state.getIn(['Login', 'password'])
})

const mapDispatch=(dispatch)=>{
  return {
    changeUsername(e){
      const action={
        type:'CHANGE_LOGIN_USERNAME',
        value:e.target.value
      }
      dispatch(action);
    },

    changePassword(e){
      const action ={
        type:'CHANGE_LOGIN_PASSWORD',
        value:e.target.value
      }
      dispatch(action);
    }
  }

}


export default connect(mapState, mapDispatch)(Login);
