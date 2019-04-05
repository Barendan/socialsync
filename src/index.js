import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header/header';
// import Directory from './components/Directory/directory';
// import InfoPanels from './components/InfoPanels';

import { TweenMax, TweenLite, TimelineLite } from "gsap/TweenMax";

import Catalog from './friends.json';
import './index.css';


class App extends Component {
  constructor(props){
    super(props);
    this.myElement = null;
    this.myTween = null;
  }

  componentDidMount(){
    this.myTween = TweenLite.to(this.myElement, 1, {x:100, y:100});
  }

  // componentWillMount = () => {
  //   let sorted = props.friends.map(item => {
  //     return (item.name)
  //   }).sort()
  //   this.setState({ persons: sorted })
  // }





  renderDisplay = () => (
    <div>
      <div className="page one">
        <Header/>

        <div className="wrapper">
          <div ref={div => this.myElement = div}>
            Hello Hello friend. Whats up
          </div>
        </div>
      </div>

      <div className="page two">

      </div>

      <div className="page three">

      </div>

    </div>
  )

  render() {
    return (
      <div>
        {this.renderDisplay()}
      </div>
    )




    // return (
    //   <div className="page">
    //   	<Header/>

    //   	<div className="wrapper">
    //   		<Directory data={this.state.persons}/>
    //   		<InfoPanels/>
    //   	</div>

    //   </div>
    // );


  }
}

ReactDOM.render(<App />, document.getElementById('root'));
