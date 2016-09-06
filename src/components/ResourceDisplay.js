import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const stringToFloat = v => v ? parseFloat(v) : 0;

const ResourceDisplay = ({resources}) => {

  const handler = e => onChange(stringToFloat(e.target.value));

  return <div>
    resources...
  </div>
}

const mapStateToProps = state => {

  return {
    resources
  }
};


export default connect(
  mapStateToProps
)(ResourceDisplay);