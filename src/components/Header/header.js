import React, {Component} from 'react';
import { firebase, googleAuth } from '../../firebase';
import './header.css';



class header extends Component {
  state = {
    status: false
  }

  signIn = () => {
    firebase.auth().signInWithPopup(googleAuth)
  }

  signOut = () => {
    firebase.auth().signOut()
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user)=> {
      this.setState({
        status: user ? false : true
      })
    })
  }


  render() {
    return (
      <div className="top_header">
      	<div className="greeting">
      		Welcome back Daniel Barenboim
      	</div>
      	<div className="menu">
          { this.state.status ?
            <button onClick={ this.signIn }> Login </button>
            :
            <button onClick={ this.signOut }> Logout </button>
          }
      		<img alt="self" src=""/>
      		Menu
      	</div>
      </div>
    );
  }
}


export default header;