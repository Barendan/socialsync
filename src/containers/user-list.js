import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {selectUser} from '../actions/index';


class UserList extends Component {

	sortUsers = (prop) => {
		return function(a,b) {
			if (typeof a[prop] == "number") {
				return (a[prop] - b[prop]);
			} else {
				return (
					( a[prop] < b[prop] ) ? -1 
					: ( ( a[prop] > b[prop] ) ? 1 : 0) )
			}
		}
	}

	createListItems() {
		this.props.users.sort(this.sortUsers("name"));

		return this.props.users
			.sort( this.sortUsers("name") )
			.map( (user, i) => {
				return (
					<li 
						key={i}
						className="personName"
						onClick={ () => this.props.selectUser(user) }
					>
						{ user.name }
					</li>
				)
			})
	}

	render() {
		return(
			<div className="directory_wrapper">
				<h2>Person-List</h2>
				<div className="list_container">
					<ul className="list">
						{this.createListItems()}
					</ul>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		users: state.users
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({selectUser: selectUser}, dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(UserList)