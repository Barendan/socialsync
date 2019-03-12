import React from 'react';

import './directory.css';

const PersonTemplate = (props) => {
	return props.data.map( (item, i) => (
		<li className="personName" key={i}> {item} </li>
	))
}


export default PersonTemplate