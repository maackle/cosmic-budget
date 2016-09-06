import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


const ArtifactControl = ({name, qty, remove, add}) => {

  return (
    <div>
      { name }:
      <button onClick={ remove }> - </button>
      { qty }
      <button onClick={ add }> + </button>
    </div>
  )
}

const ArtifactDisplay = (props) => {
  console.log(props);
  const {artifacts, addArtifact, removeArtifact} = props;
  const names = _.sortBy(_.keys(artifacts));

  const controls = _.map(names, name => {
    return React.createElement(ArtifactControl, {
      name,
      key: name,
      qty: artifacts[name].qty,
      add: _.partial(addArtifact, name),
      remove: _.partial(removeArtifact, name),
    })
  });

  return <div>{ controls }</div>
}

const mapStateToProps = state => {
  const artifacts = state.get('artifacts').toJS();
  return {artifacts};
};

const mapDispatchToProps = (dispatch, props) => ({
  addArtifact: (target) => dispatch(actions.updateArtifactQty(target, 1)),
  removeArtifact: (target) => dispatch(actions.updateArtifactQty(target, -1))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtifactDisplay);