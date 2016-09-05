import { combineReducers } from 'redux-immutable';
import sliders from './sliders';

const todoApp = combineReducers({
  sliders,
});

export default todoApp;