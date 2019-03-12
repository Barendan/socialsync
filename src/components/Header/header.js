import React, {Component} from 'react';

import './header.css';

class header extends Component {
  render() {
    return (
      <div className="top_header">
      	<div className="greeting">
      		Welcome back Daniel Barenboim
      	</div>
      	<div className="menu">
      		<img alt="self" src=""/>
      		Menu
      	</div>
      </div>
    );
  }
}


export default header;