import React, {Component} from 'react';
import { connect }  from 'react-redux';
import {Link} from 'react-router-dom';
import {LoginWrapper, LoginLeftWrapper, LoginRightWrapper, LoginHeader, LoginForm, LoginInput, LoginButton, SignupLink, SignupClick, SignupTitle, LoginRightTitle} from './styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col } from 'react-bootstrap';
import axios from 'axios';

class Register extends Component {
  render(){
    const {username, password, permission}=this.props;
    return (
        <div>
        <LoginWrapper>
          <LoginLeftWrapper>
            <LoginHeader>
              Signup
            </LoginHeader>
            <LoginForm >
              <LoginInput placeholder='Email' onChange={this.props.changeUsername} value={username}/>
              <LoginInput placeholder='Password' type='password' onChange={this.props.changePassword} value={password}/>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label style={{textAlign:'center', display:'block'}}><b>Permission</b></Form.Label>
                <Form.Control as="select" 
                              style={{width:'80%', 
                                      margin:'auto',
                                      borderRadius: '2rem',
                                      boxShadow:'0 0 2rem rgba(0,0,255,.1)',
                                      border: 'none',color: '#000'}}
                              onChange={this.props.changePermission}>
                  <option>Normal User</option>
                  <option>Admin</option>
                </Form.Control>
              </Form.Group>
              <LoginButton onClick={this.props.submitUserInfo.bind(this, username, password, permission)}>Register</LoginButton>
            </LoginForm>
            <SignupLink>
              <SignupTitle>Already Have an account?</SignupTitle>
              <SignupClick><Link to={'/login'}>LOGIN</Link></SignupClick>
            </SignupLink>
          </LoginLeftWrapper>
          <LoginRightWrapper>
            <LoginRightTitle>Join EMS Brüel & Kjær Today!</LoginRightTitle>
          </LoginRightWrapper>
        </LoginWrapper>
        </div>
    );
  }
}

const mapState=(state)=>({
  username:state.getIn(['Register', 'username']),
  password:state.getIn(['Register', 'password']),
  permission:state.getIn(['Register', 'permission'])
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

    submitUserInfo(username, password, permission){
      const userInfo={
        username:username,
        password:password,
        permission:permission
      }

      axios.post('http://localhost:5000/userinfo/add',userInfo)
        .then(res=>console.log(res.data));

      const action={
        type:'ADD_USER_INFO_LIST',
        username:username,
        password:password,
        permission:permission
      };
      dispatch(action);
    },

    changePermission(e){
      const action={
        type:'CHANGE_USER_PERMISSION',
        value:e.target.value
      };
      dispatch(action);
    }
  }
}


export default connect(mapState, mapDispatch)(Register);
