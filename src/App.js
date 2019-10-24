import React, {Component, Fragment} from 'react';
import Login from './login/index';
import Register from './register/index';
import {BrowserRouter, Route} from 'react-router-dom';
import { connect }  from 'react-redux';

class App extends Component {
  render(){
    return (
        <Fragment>
          <BrowserRouter>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/register' exact component={Register}></Route>
            </BrowserRouter>
        </Fragment>
    );
  }
}

// const mapState=(state)=>({

// })

// const mapDispatch=(dispatch)=>({

// })


export default App;
