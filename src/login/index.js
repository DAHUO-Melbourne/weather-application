import React, {Component} from 'react';
import { connect }  from 'react-redux';
import {Link} from 'react-router-dom'
import {LoginWrapper, LoginLeftWrapper, LoginRightWrapper, LoginHeader, LoginForm, LoginInput, LoginButton, SignupLink, SignupClick, SignupTitle, LoginRightTitle} from './styled';

class Login extends Component {
  render(){
    const {username, password, list}=this.props;
    return (
        <LoginWrapper>
          <LoginLeftWrapper>
            <LoginHeader>
              Login
            </LoginHeader>
            <LoginForm>
              <LoginInput placeholder='Email' value={this.props.username} onChange={this.props.changeUsername}/>
              <LoginInput placeholder='Password' value={this.props.password} onChange={this.props.changePassword} type= 'password'/>
              <LoginButton onClick={this.props.loginClick.bind(this, username, password, list)}>Login</LoginButton>
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
    loginClick(username, password, list){
      const convertList=list.toJS();
      let count=0;
     for(let i=0;i<convertList.length;i++){
       if((convertList[i].username===username)&&(convertList[i].password===password)){
        console.log('Login Success');
        window.location.href='/weather';
       }
       else
        count++;
     }
     if(count===convertList.length){
       alert("Please change your username or password");
     }
     
    }
  }

}


export default connect(mapState, mapDispatch)(Login);
//export default Login;