import React from 'react';

import styles from './directory.css';

const PersonTemplate = (props) => {
	return props.data.map( (item, i) => (
		<div key={i}>
			<li className={styles.personName}> {item.name} </li>
		</div>
	))
}


export default PersonTemplate