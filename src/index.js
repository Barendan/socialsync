import React from 'react';
import ReactDOM from "react-dom";

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';

import {BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { firebase } from './firebase';

const store = createStore(allReducers);

const App = () => {
	return(
		<BrowserRouter>
			<Routes/>
		</BrowserRouter>
	)
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

firebase.auth().onAuthStateChanged( (user)=> {
	if(user){
		console.log('logged in')
	} else {
		console.log('logged out')
	}
})