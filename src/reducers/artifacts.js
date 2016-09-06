import _ from 'lodash';
import I from 'immutable';

import {ARTIFACT_NAMES} from '../constants';


const initState = _.zipObject(
  ARTIFACT_NAMES,
  _.map(ARTIFACT_NAMES, name => ({
    name: name,
    qty: 0
  }))
);

console.log('initState', initState);


export default (state=I.fromJS(initState), action) => {
  switch(action.type) {
    case 'UPDATE_ARTIFACT_QTY':
      const {target, value} = action;
      return state.updateIn([target, 'qty'], v => v += value);
    default:
      return state;
  }
}