import React, { Component } from 'react';

import InputEvents from './events/InputEvents'
import MovementEvents from './events/MovementEvents'
import './events/Events.css'
import FormValidation from './forms/FormValidation'

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputEvents />
        <MovementEvents />
        <FormValidation />
      </div>
    );
  }
}

export default App;
