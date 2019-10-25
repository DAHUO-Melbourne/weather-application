import React, { Fragment } from 'react';
import {GlobalStyle} from './style'
import Login from './login/index';
import Register from './register/index';
import {BrowserRouter, Route} from 'react-router-dom';
import { Provider }  from 'react-redux';
import store from './store'


function App(){
    return (
        <Fragment>
          <Provider store={store}>
          <BrowserRouter> 
            <div>
             <Route path='/login' exact component={Login}></Route>
              <Route path='/register' exact component={Register}></Route>
              </div>
          </BrowserRouter>
            </Provider>
            <GlobalStyle/>
        </Fragment>
    );
}

export default App;
