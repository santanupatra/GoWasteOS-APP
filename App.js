import React, { Component } from 'react';
import { SafeAreaView } from "react-native"
import 'react-native-gesture-handler';
import AppContainer from "./src/navigation/Navigator"
class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
          <AppContainer />
        </SafeAreaView>
    );
  }
}

export default App;