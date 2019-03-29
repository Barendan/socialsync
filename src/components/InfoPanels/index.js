import React, {Component} from 'react';

import RenderPerson from './renderPerson';

// import MainPanel from './mainPanel.js';
// import DetailedPanel from './detailedPanel.js';
import './infopanels.css';

class InfoPanels extends Component {
	state = {
		formdata:{
			name:'Daniel Barenboim',
			age:'26',
			birthday:'April 20th 1992',
			profession:'Full-Stack Dev',
			location:'Dania Beach'
		},
		edit: false
	}

	renderForm = () => {

	}

	render() {
		return (
			<div className="panel-wrapper">
				{!this.state.edit ? 
					<RenderPerson data={this.state.formdata}/>
				:
					this.renderForm()
				}
			</div>
		)
	}
}


export default InfoPanels;