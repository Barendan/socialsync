import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Header from './components/Header/header';
import Directory from './components/Directory/directory';
import DisplayPanel from './components/DisplayPanel/displayPanel';


class App extends Component {
  render() {
    return (
      <div>
      	<Header/>
      	<Directory/>
      	<DisplayPanel/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
