import React, { Component } from 'react';

import Slider from './Slider';
import ControlPanel from './ControlPanel';

export default class App extends Component {
  render() {
    return (
      <div>
        <ControlPanel />
        Hello, world.
      </div>
    );
  }
}
