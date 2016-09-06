import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import InputControl from './InputControl';


const ControlPanel = (props) => {

  const controls = _.map(['sunlight', 'rain'], target => (
    <InputControl key={ target } target={ target } value={ props[target] } />
  ));

  return <div>
    { controls }
  </div>
}

const mapStateToProps = (state) => {
  return state.get('sliders').toJS();
}

export default connect(
  mapStateToProps
)(ControlPanel)