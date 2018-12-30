import React, {Component} from 'react';

import './directory.css';
import Catalog from '../../friends.json';

class Directory extends Component {

	state = {
		people:[]
	}

	componentWillMount = () => {

	}


	render() {
		console.log(Catalog)
		return (
			<div>
				Directory Display
			</div>
		);
	}
}


export default Directory;