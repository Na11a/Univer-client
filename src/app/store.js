import { combineReducers, createStore } from '@reduxjs/toolkit';
import teacherReducer from '../features/Teacher/reducer';
import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
const composedEnhancer = composeWithDevTools(
  applyMiddleware(thunk)
)
export const rootReducer = combineReducers({
  teachers:teacherReducer
})
const store = createStore(rootReducer,composedEnhancer ) 
export default store
