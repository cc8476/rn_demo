import React from 'react';
import {
    View,Text
} from 'react-native';

import AppContainer from './pages'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <AppContainer></AppContainer>

      </>
    );
  }
}

export default App;
