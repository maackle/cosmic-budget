import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';


const store = createStore(reducer);

const entry = <Provider store={ store }>
  <App />
</Provider>;

ReactDOM.render(entry, document.getElementById('root'));
