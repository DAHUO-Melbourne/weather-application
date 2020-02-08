import React, {Component} from 'react';
import { connect }  from 'react-redux';
import {Link} from 'react-router-dom'
import {LoginWrapper, LoginLeftWrapper, LoginRightWrapper, LoginHeader, LoginForm, LoginInput, LoginButton, SignupLink, SignupClick, SignupTitle, LoginRightTitle} from './styled';
import axios from 'axios';
import sha256 from 'sha256';

class Login extends Component {

  render(){
    const {username, password}=this.props;
    return (
        <LoginWrapper>
          <style>{'body { background-image: linear-gradient(to top,#5ee7df 0,#66a6ff 100%); }'}</style>
          <LoginLeftWrapper>
            <LoginHeader>
              Login
            </LoginHeader>
            <LoginForm>
              <LoginInput placeholder='Email' value={this.props.username} onChange={this.props.changeUsername}/>
              <LoginInput placeholder='Password' value={this.props.password} onChange={this.props.changePassword} type= 'password'/>
              <LoginButton onClick={this.props.loginClick.bind(this, username, sha256(password))}>Login</LoginButton>
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
    );
  }
}

const mapState=(state)=>({
  username:state.getIn(['Login', 'username']),
  password:state.getIn(['Login', 'password']),
  list:state.getIn(['Register', 'userInfoList']),
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
    },

    loginClick(username, password){
      axios.post('http://localhost:5000/userinfo/find',{
        username:username,
        password:password,
      }).then(res=>{
        if(res.data.length===0){
            alert('Please change your password')
        }
        else {
            const action={
              type:'LOG_USER_PERMISSION',
              value: res.data[0].permission
            }
            dispatch(action);
            this.props.history.push('/weather');
            return true;
          }
        });   
    }
  }
}

export default connect(mapState, mapDispatch)(Login);