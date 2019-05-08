import React, {Component} from 'react';
import './app.css';

import Header from './Header/header';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';


class App extends Component {

  render(){
    return (
      <div className="page">
        <Header />
        <div className="wrapper">
          <UserList />
          <User />
          <UserDetail />
        </div>
      </div>
    )
  }

}

export default App;