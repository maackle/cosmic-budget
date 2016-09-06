import React, { Component } from 'react';

import ControlPanel from './ControlPanel';
import ArtifactDisplay from './ArtifactDisplay';

export default class App extends Component {
  render() {
    return (
      <div>
        <ControlPanel />
        <ArtifactDisplay />
      </div>
    );
  }
}
