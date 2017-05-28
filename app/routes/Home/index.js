import React, { Component } from 'react';
import HomeScreen from './Home';
import SplashScreen from 'react-native-splash-screen';

export default class Home extends Component {

  componentDidMount () {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }

  render () {
    return <HomeScreen navigation={this.props.navigation} />;
  }
}
