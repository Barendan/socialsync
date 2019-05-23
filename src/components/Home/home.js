import React, { Component } from 'react';
import { compose } from 'recompose';

import { AuthUserContext, withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';


const HomePage = () => (
	<div> 
		<h1>Home page</h1> 
		<hr />
		
		<AuthUserContext.Consumer>
			{ authUser => <Contacts user={authUser} /> }
		</AuthUserContext.Consumer>
	</div>
)

const INITIAL_STATE = {
	contacts: [],
	name: '',
	status: '',
	birthday: '',
	location: '',
	relation: '',
	profession: '',
	strengths: [],
	weaknesses: [],
	interests: [],
	loading: false,
	error: null
}

class ContactsBase extends Component {
	constructor(props){
		super(props);

		this.state = { ...INITIAL_STATE }
	}

	componentDidMount() {
		this.onListenForContacts(this.props.user);
	}

	componentWillUnmount() {
		this.props.firebase.contacts().off()
	}

	onListenForContacts(user) {
		this.setState({ loading: true })

		this.props.firebase
			.userContacts(user.uid)
			// .orderByChild('createdAt')
			.on('value', snapshot => {
				const contactObject = snapshot.val()

				console.log(contactObject)

				if(contactObject) {
					const contactList = Object.keys(contactObject).map(key => ({
						...contactObject[key],
						uid: key
					}))

					this.setState({
						contacts: contactList,
						loading: false
					})
				} else {
					this.setState({ contacts: null, loading: false })
				}
			})
	}

	onChangeText = event => {
		this.setState({ [event.target.name]: event.target.value })
	}

	onCreateContact = (event, authUser) => {
		const {
			name, 
			status, 
			birthday,
			location,
			relation,
			profession,
			strengths,
			weaknesses,
			interests
		} = this.state

		this.props.firebase.contacts(authUser.uid).push({
			name,
			status,
			birthday,
			location,
			relation,
			profession,
			strengths,
			weaknesses,
			interests,
			userId: authUser.uid,
			createdAt: this.props.firebase.serverValue.TIMESTAMP
		})

		this.setState({ ...INITIAL_STATE })
		event.preventDefault()
	}

	onRemoveContact = uid => {
		this.props.firebase.contact(uid).remove();
	}

	onEditContact = (contact, text) => {
		const { uid, ...contactSnapshot } = contact

		this.props.firebase.contact(contact.uid).set({
			...contactSnapshot,
			text,
			editedAt: this.props.firebase.serverValue.TIMESTAMP
		})
	}

	render() {
		const { 
			contacts, 
			name, 
			status, 
			birthday,
			location,
			relation,
			profession,
			strengths,
			weaknesses,
			interests, 
			loading,
			error
		} = this.state

		return(
			<AuthUserContext.Consumer>
				{ authUser => (
					<div>
						{ loading && <div>Loading ...</div> }

						{ contacts ? (
							<ContactList
								authUser={authUser}
								contacts={contacts}
								onEditContact={this.onEditContact}
								onRemoveContact={this.onRemoveContact}
							/>
						) : (
							<div>There are no contacts ...</div>
						)}

						<form onSubmit={event => this.onCreateContact(event, authUser)}>
							Name : <br/>
							<input
								name="name"
								type="text"
								value={name}
								onChange={this.onChangeText}
							/> <br />
							Status : <br />
							<input
								name="status"
								type="text"
								value={status}
								onChange={this.onChangeText}
							/><br />
							Birthday : <br />
							<input
								name="birthday"
								type="text"
								value={birthday}
								onChange={this.onChangeText}
							/> <br />
							Location : <br />
							<input
								name="location"
								type="text"
								value={location}
								onChange={this.onChangeText}
							/> <br />
							Relation : <br />
							<input
								name="relation"
								type="text"
								value={relation}
								onChange={this.onChangeText}
							/> <br />
							Profession : <br />
							<input
								name="profession"
								type="text"
								value={profession}
								onChange={this.onChangeText}
							/> <br />
							Strengths : <br />
							<input
								name="strengths"
								type="text"
								value={strengths}
								onChange={this.onChangeText}
							/> <br />
							Weaknesses : <br /> 
							<input
								name="weaknesses"
								type="text"
								value={weaknesses}
								onChange={this.onChangeText}
							/> <br />
							Interests: <br />
							<input
								name="interests"
								type="text"
								value={interests}
								onChange={this.onChangeText}
							/> <br /> <br />
							<button type="submit">Add Contact</button>
						</form>
					</div>
				)}
			</AuthUserContext.Consumer>
		)
	}
}


const ContactList = ({
	authUser,
	contacts,
	onEditContact,
	onRemoveContact
}) => (
	<ul>
		{contacts.map(contact => (
			<ContactItem 
				key={contact.uid}
				authUser={authUser}
				contact={contact}
				onEditContact={onEditContact}
				onRemoveContact={onRemoveContact}
			/>
		))}
	</ul>
)


class ContactItem extends Component {
	constructor(props){
		super(props);

		this.state = {
			editMode: false,
			editText: this.props.contact.text
		}
	}

	onToggleEditMode = () => {
		this.setState( state => ({
			editMode: !state.editMode,
			editText: this.props.contact.text
		}))
	}

	onChangeEditText = event => {
		this.setState({ editText: event.target.value })
	}

	onSaveEditText = () => {
		this.props.onEditContact(this.props.contact, this.state.editText)
		this.setState({ editMode: false })
	}

	render() {
		const { authUser, contact, onRemoveContact } = this.props
		const { editMode, editText } = this.state

		return(
			<li>
				{editMode ? (
					<input
						type="text"
						value={editText}
						onChange={this.onChangeEditText}
					/>
				) : (
					<span>
						<strong>{contact.userId}</strong><br />
						{ contact.name + ' ' }
						{ contact.editedAt && <span>(Edited)</span> }
					</span>
				)}

				{authUser.uid === contact.userId && (
					<span>
						{editMode ? (
							<span>
								<button onClick={this.onSaveEditText}>Save</button>
								<button onClick={this.onToggleEditMode}>Reset</button>
							</span>
						) : (
							<button onClick={this.onToggleEditMode}>Edit</button>
						)}

						{!editMode && (
							<button
								type="button"
								onClick={()=> onRemoveContact(contact.uid)}
							>
								Delete
							</button>
						)}
					</span>
				)}
			</li>
		)
	}
}


const Contacts = withFirebase(ContactsBase)
const condition = authUser => !!authUser;

export default compose(
	withAuthorization(condition)
)(HomePage)