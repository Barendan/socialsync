import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header/header';
import Directory from './components/Directory/directory';
import InfoPanels from './components/InfoPanels';

import Catalog from './friends.json';
import './index.css';


class App extends Component {
  state = {
    persons: Catalog,
    selected: []
  }

  render() {
    console.log(this.state.persons)
    return (
      <div className="page">
      	<Header/>
      	<div className="wrapper">
      		<Directory data={this.state.persons}/>
      		<InfoPanels/>
      	</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
