import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


const InputControl = ({target, label, value, onChange}) => {

  const handler = e => onChange(e.target.value);

  return <div>
    <label>
      { label }
      <input type="number" value={ value } onChange={ handler } />
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