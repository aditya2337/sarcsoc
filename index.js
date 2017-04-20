'use strict';

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Router, Scene } from 'react-native-router-flux';

import Home from './app/routes/Home';
import Header from './app/components/Header.js';

export default class App extends Component {

  componentDidMount () {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }

  render () {
    return (
      <Router>
        <Scene key='root' hideNavBar={true}>
          <Scene key='pageOne' component={Home} initial={true} />
        </Scene>
      </Router>
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
