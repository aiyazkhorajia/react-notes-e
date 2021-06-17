import { combineReducers } from 'redux'
import signInReducer from './signInReducer'
import notesReducer from './notesReducer'

export default combineReducers({
  signInData: signInReducer,
  notesData: notesReducer
})
