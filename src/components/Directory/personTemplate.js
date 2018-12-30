import React from 'react';

import styles from './directory.css';

const PersonTemplate = (props) => {
	return props.data.map( (item, i) => (
		<li className={styles.personName} key={i}> {item.name} </li>
	))
}


export default PersonTemplate