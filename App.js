import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import SuccessAlert from './components/SCLAlert/SuccessAlert';
import ErrorAlert from './components/SCLAlert/ErrorAlert';
import Display from './components/Display';
import NumbersGrid from './components/NumbersGrid';
import ForgotPin from './components/ForgotPin';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SuccessAlert />
        <ErrorAlert />
        <Display />
        <NumbersGrid />
        <ForgotPin />
      </View>
    );
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
