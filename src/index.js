require('rc-slider/assets/index.css');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Immutable from 'immutable';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';


const store = createStore(reducer, Immutable.Map());

const entry = <Provider store={ store }>
  <App />
</Provider>;

ReactDOM.render(entry, document.getElementById('root'));
