import React, {Component} from 'react';

import MainPanel from './mainPanel.js';
import DetailedPanel from './detailedPanel.js';
import './infopanels.css';

class InfoPanels extends Component {
  render() {
    return (
    	<div className="panel-wrapper">
    		<MainPanel/>
    	</div>
    )
  }
}


export default InfoPanels;