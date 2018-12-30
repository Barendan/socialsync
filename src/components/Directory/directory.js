import React, {Component} from 'react';

import './directory.css';
import Catalog from '../../friends.json';
import PersonTemplate from './personTemplate';

import './directory.css';


class Directory extends Component {

	state = {
		people:[]
	}

	componentWillMount = () => {
		this.setState({
				people: Catalog.friends
			})
	}

	render() {
		// console.log(this.state.people)
		return (
			<div className="directory_wrapper">
				<h2>Directory</h2>
				<ul className="list">
					<PersonTemplate data={this.state.people}/>
				</ul>
			</div>
		);
	}
}


export default Directory;