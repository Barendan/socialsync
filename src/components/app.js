import React from 'react';
import './app.css';

import Header from './Header/header';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';
import Demo from './Demo/demo';

// import User from './Forms/user';

const App = (props) => (
  <div className="page">
    
    <Header />
    { props.auth ? 
      <div className="wrapper">
        <UserList users={props} />
        <UserDetail />
      </div>
      :
      <div className="wrapper">
        <Demo />
      </div>
    }

  </div>
)

export default App;