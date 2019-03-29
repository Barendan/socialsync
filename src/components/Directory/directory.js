import React, {Component} from 'react';

import Catalog from '../../friends.json';
import PersonTemplate from './personTemplate';

import './directory.css';


class Directory extends Component {

	state = {
		persons:[]
	}

	componentWillMount = () => {
		let sorted = Catalog.friends.map(item => {
			return (item.name)
		}).sort()
		this.setState({ persons: sorted })
	}

	addNewPerson = (item) => {
		
		
		let persons = this.state.persons;
		persons.push(item);
		this.setState({persons});
	}

	deletePerson = () => {

	}

	editPerson = () => {

	}

	render() {
		// console.log(this.state.persons)
		return (
			<div className="directory_wrapper">
				<h2>Directory</h2>
				<div className="list_container">
				<ul className="list">
					<PersonTemplate data={this.state.persons}/>
				</ul>
				</div>

				<button className="add"
						onClick={this.addNewPerson}
				/>
				<button className="delete"
						onClick={this.deletePerson}
				/>
				<button className="edit"
						onClick={this.editPerson}
				/>
			</div>
		);
	}
}


export default Directory;