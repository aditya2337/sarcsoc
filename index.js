'use strict';

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {

  componentDidMount () {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Akhil Chutiya hai!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
