import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {

	render(){
		if (!this.props.user) {
			return(
				<div className="panel-wrapper">
					<h4>Select a user...</h4>
				</div>
			)
		}
		return(
			<div className="panel-wrapper">
				<img src={this.props.user.thumbnail} />
				<h2> {this.props.user.name} {this.props.user.last}</h2>
				<h3>Age: {this.props.user.age} </h3>
				<h3>Description: {this.props.user.description} </h3>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		user: state.activeUser
	}
}

export default connect(mapStateToProps)(UserDetail);