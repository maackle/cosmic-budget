import Immutable from 'immutable';


const initState = Immutable.Map({
  'sunlight': 100
});


export default (state=initState, action) => {
  switch(action.type) {
    case 'SET_INPUT':
      const {target, value} = action;
      return state.set(target, _.isNil(value) ? 0 : parseFloat(value));
    default:
      return state;
  }
}