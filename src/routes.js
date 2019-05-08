import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/header';

import User from './components/Forms/user';
import Login from './containers/login';

const Routes = () => {
	return (
		<div>
			<Header/>
			<Switch>
				<Route path="/" exact component={User} />
				<Route path="/user" exact component={User} />
				<Route path="/login" exact component={Login} />
			</Switch>
		</div>
	)
}


export default Routes;