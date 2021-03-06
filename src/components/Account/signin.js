import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from './signup';
import { withFirebase } from '../Firebase';
import { PasswordForgetLink } from './passwordForget';



const SignInPage = () => (
	<div>
		<h1>Sign In</h1>
		<SignInForm />
		<br />
		<SignInGoogle />
		<SignInFacebook />
		<hr />
		<PasswordForgetLink />
		<SignUpLink />
	</div>
);

const INITIAL_STATE = {
	email: '',
	password: '',
	error: null
}


class SignInGoogleBase extends Component {
	constructor(props){
		super(props);
		this.state = { error: null }
	}

	onSubmit = event => {
		this.props.firebase
		.doSignInWithGoogle()
		.then(socialAuthUser => {
			return this.props.firebase
				.user(socialAuthUser.user.uid)
				.set({
					username: socialAuthUser.user.displayName,
					email: socialAuthUser.user.email
				})
		})
		.then( () => {
			this.setState({ error: null });
			this.props.history.push('/')
		})
		.catch(error => {
			this.setState({ error })
		})

		event.preventDefault()
	}

	render(){
		const { error } = this.state;

		return (
			<form onSubmit={this.onSubmit}>
				<button type="submit">Sign In with Google</button>
				{ error && <p>{ error.message }</p> }
			</form>
		)
	}
}

class SignInFacebookBase extends Component {
	constructor(props){
		super(props);

		this.state = { error: null }
	}

	onSubmit = event => {
		this.props.firebase
			.doSignInWithFacebook()
			.then(socialAuthUser => {
				return this.props.firebase
					.user(socialAuthUser.user.uid)
					.set({
						username: socialAuthUser.additionalUserInfo.profile.name,
						email: socialAuthUser.additionalUserInfo.profile.email
					})
			})
			.then( () => {
				this.setState({ error: null })
				this.props.history.push('/');
			})
			.catch( error => {
				this.setState({ error })
			})

		event.preventDefault();
	}

	render() {
		const { error } = this.state;

		return (
			<form onSubmit={this.onSubmit}>
				<button type="submit">Sign In with Facebook</button>

				{ error && <p>{error.message}</p> }
			</form>
		)
	}
}


class SignInFormBase extends Component {
	constructor(props){
		super(props);

		this.state = { ...INITIAL_STATE }
	}

	onSubmit = event => {
		const { email, password } = this.state;

		this.props.firebase
			.doSignInWithEmailAndPassword(email, password)
			.then( () => {
				this.setState({ ...INITIAL_STATE });
				this.props.history.push('/');
			})
			.catch(error => {
				this.setState({ error })
			})

		event.preventDefault();
	}

	onChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	}

	render() {
		const { email, password, error } = this.state;

		const isInvalid = password === '' || email === '';

		return (
	      <form onSubmit={this.onSubmit}>
	        <input
	          name="email"
	          value={email}
	          onChange={this.onChange}
	          type="text"
	          placeholder="Email Address"
	        /><br />
	        <input
	          name="password"
	          value={password}
	          onChange={this.onChange}
	          type="password"
	          placeholder="Password"
	        /><br />
	        <button disabled={isInvalid} type="submit">
	          Sign In
	        </button>

	        {error && <p>{error.message}</p>}
	      </form>
	    );
	}
}

const SignInForm = compose(
	withRouter,
	withFirebase,
)(SignInFormBase);

const SignInGoogle = compose(
	withRouter,
	withFirebase,
)(SignInGoogleBase);

const SignInFacebook = compose(
	withRouter,
	withFirebase,
)(SignInFacebookBase)

export default SignInPage;

export { SignInForm, SignInGoogle }