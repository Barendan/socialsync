import React from 'react';
import ReactDOM from "react-dom";

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';

import { firebase } from './firebase';
import App from './components/app';


const store = createStore(allReducers);


firebase.auth().onAuthStateChanged((user)=>{
	ReactDOM.render(
	    <Provider store={store}>
	        <App auth={user}/>
	    </Provider>,
	    document.getElementById('root')
	);
})