import React, { Fragment } from 'react';
import { GlobalStyle } from './style'
import Login from './login/index';
import Register from './register/index';
import Weather from './WeatherDisplay/index'
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'
import Favourite from './favourite';


function App() {
    return ( 
        <Fragment>
        <Provider store={store}>
        <BrowserRouter> 
          <div>
           <Route path='/' exact component={Login}></Route>
           <Route path='/register' exact component={Register}></Route>
           <Route path='/weather' exact component={Weather}></Route>
           <Route path='/favourite' exact component={Favourite}></Route>
            </div>
        </BrowserRouter>
          </Provider>
          <GlobalStyle/>
      </Fragment>
    );
}

export default App;