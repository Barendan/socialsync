import { combineReducers } from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';
import { reducer as formReducer } from 'redux-form';


const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer,
    form: formReducer
})

export default allReducers;