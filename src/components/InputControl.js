import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const stringToFloat = v => v ? parseFloat(v) : 0;

const InputControl = ({target, label, value, onChange}) => {

  const handler = e => onChange(stringToFloat(e.target.value));

  return <div>
    <label>
      { label }
      <input type="number" value={ value || 0 } onChange={ handler } />
      { value }
    </label>
  </div>
}


const mapDispatchToProps = (dispatch, props) => ({
  onChange(value) {
    dispatch(actions.setInput(props.target, value))
  }
});


export default connect(
  null,
  mapDispatchToProps
)(InputControl);