import { combineReducers } from 'redux-immutable';
import artifacts from './artifacts';
import sliders from './sliders';

export default combineReducers({
  artifacts,
  sliders,
})
