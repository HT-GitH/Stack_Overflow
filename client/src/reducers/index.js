import {combineReducers} from "redux";
import authReducer from './auth'
import currentUserReducer from './currentUser.js'
import questionsReducer from './questions.js'

export default combineReducers({
authReducer,currentUserReducer,questionsReducer    
})