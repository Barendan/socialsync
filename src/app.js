import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from './components/Navigation/navigation';
import HomePage from './components/Home/home';
import SignUpPage from './components/Account/signup';
import SignInPage from './components/Account/signin';
import PasswordForgetPage from './components/Account/passwordForget';
import MyAccountPage from './components/Account/myAccount';


import { withAuthentication } from './components/Session';


const App = () => (
  <BrowserRouter>
    <div>
      <Navigation />

      <hr />

      <Route exact path='/' component={HomePage} />
      <Route path='/signup' component={SignUpPage} />
      <Route path='/signin' component={SignInPage} />
      <Route path='/pw-forget' component={PasswordForgetPage} />
      <Route path='/account' component={MyAccountPage} />
    </div>
  </BrowserRouter>
)


export default withAuthentication(App);
