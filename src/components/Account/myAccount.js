import React from 'react';

import { withAuthorization, AuthUserContext } from '../Session';
import { PasswordForgetForm } from './passwordForget';
import PasswordChangeForm from './passwordChange';


const AccountPage = () => (
	<AuthUserContext.Consumer>
		{authUser => (
			<div>
				<h1>Account {authUser.email}</h1>
				<hr />
				<h3>Reset my password</h3>
				<PasswordForgetForm />
				<br/><br />
				<h3>Change my password</h3>
				<PasswordChangeForm />
			</div>
		)}
	</AuthUserContext.Consumer>
)

const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);