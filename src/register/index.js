import React, {Component} from 'react';
import { connect }  from 'react-redux';
import {Link} from 'react-router-dom';
import {LoginWrapper, LoginLeftWrapper, LoginRightWrapper, LoginHeader, LoginForm, LoginInput, LoginButton, SignupLink, SignupClick, SignupTitle, LoginRightTitle} from './styled';

class Register extends Component {
  render(){
    const {username, password}=this.props
    return (
      <div className="App">
        <div>
        <LoginWrapper>
          <LoginLeftWrapper>
            <LoginHeader>
              Signup
            </LoginHeader>
            <LoginForm >
              <LoginInput placeholder='Email' onChange={this.props.changeUsername} value={username}/>
              <LoginInput placeholder='Password' type='password' onChange={this.props.changePassword} value={password}/>
              <LoginButton onClick={this.props.submitUserInfo(username, password)}>Register</LoginButton>
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

const mapState=(state)=>({
  username:state.getIn(['Register', 'username']),
  password:state.getIn(['Register', 'password']),
})

const mapDispatch=(dispatch)=>{
  return {
    changeUsername(e){
      const action={
        type:'CHANGE_REGISTER_USERNAME',
        value:e.target.value
      }
      dispatch(action);
    },

    changePassword(e){
      const action ={
        type:'CHANGE_REGISTER_PASSWORD',
        value:e.target.value
      }
      dispatch(action);
    },

    submitUserInfo(username, password){
      const action={
        type:'ADD_USER_INFO_LIST',
        username:username,
        password:password
      }
      dispatch(action);
    }
  }
}


export default connect(mapState, mapDispatch)(Register);
