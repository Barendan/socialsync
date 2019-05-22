import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../Account/signout';
import { AuthUserContext } from '../Session';
import './navigation.css';



const Navigation = () => (
    <div>
        <AuthUserContext.Consumer>
          { authUser => 
              authUser ? (
                <NavigationAuth authUser={authUser} /> 
              ) : (
                <NavigationNonAuth />
              )
          }
        </AuthUserContext.Consumer>
    </div>
)


const NavigationAuth = ({ authUser }) => (
    <ul className="top_bar">
        <li className="greeting">
            Hello there { authUser.username }
        </li>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/account'>Account</Link>
        </li>
        <li>
          <SignOutButton />
        </li>
    </ul>
)


const NavigationNonAuth = () => (
    <ul className="top_bar">
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/signin'>Sign In</Link>
        </li>
        <li>
            <Link to='/signup'>Sign Up</Link>
        </li>
    </ul>
)


export default Navigation;