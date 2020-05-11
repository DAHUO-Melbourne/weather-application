import React, {Component} from 'react';
import { connect }  from 'react-redux';
import {Link} from 'react-router-dom'
import {LoginWrapper, LoginLeftWrapper, LoginRightWrapper, LoginHeader, LoginForm, LoginInput, LoginButton, SignupLink, SignupClick, SignupTitle, LoginRightTitle} from './styled';
import axios from 'axios';
import sha256 from 'sha256';
import { BoxLoading } from 'react-loadingg';

class Login extends Component {
  constructor(props){
    super(props)
    this.state={
      animationShow: false
    }
  }
  render(){
    const {username, password}=this.props;
    return (
        <LoginWrapper>
          <style>{'body { background-image: linear-gradient(to top,#5ee7df 0,#66a6ff 100%); }'}</style>
          <LoginLeftWrapper>
            <LoginHeader>
              Login
            </LoginHeader>
            <LoginForm onSubmit={this.props.loginClick.bind(this, username, sha256(password))}>
              <LoginInput placeholder='Email' value={this.props.username} onChange={this.props.changeUsername}/>
              <LoginInput placeholder='Password' value={this.props.password} onChange={this.props.changePassword} type= 'password'/>
              <LoginButton type="submit" style={{outline:'none'}}>Login</LoginButton>
            </LoginForm>
            
            <SignupLink>
              <SignupTitle>Don't have an account?</SignupTitle>
              <SignupClick><Link to={'/register'}>SIGN UP</Link></SignupClick>
            </SignupLink>
          </LoginLeftWrapper>
          {this.state.animationShow?
           <BoxLoading color='#b50000' style={{zIndex: 100, position: 'fixed', left: '50%', top: '50%'}}/>
           :
           <div />
          }
          <LoginRightWrapper>
            <LoginRightTitle>Welcome Back!</LoginRightTitle>
          </LoginRightWrapper>
        </LoginWrapper>
    );
  }

  componentDidMount(){
    document.title = 'weather enquiry'
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

    loginClick(username, password, event){
      event.preventDefault();    
      this.setState(()=>({
        animationShow: true
      }))
      axios.post('https://radiant-thicket-19584.herokuapp.com/userinfo/find',{
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
            this.setState(()=>({
              animationShow: false
            }))
            this.props.history.push('/weather');
            return true;
          }
        });   
    }
  }
}

export default connect(mapState, mapDispatch)(Login);