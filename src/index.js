import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header/header';
import Directory from './components/Directory/directory';
import InfoPanels from './components/InfoPanels';

import './index.css';


class App extends Component {
  render() {
    return (
      <div>
      	<Header/>
      	<Directory/>
      	<InfoPanels/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
