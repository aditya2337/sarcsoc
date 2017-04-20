import React, { Component } from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';
import { Card, Button } from 'react-native-material-design';

import images from '../../config/images';
import styles from './styles';

import Article from '../../components/Post';

export default class HomeContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {openStatus: true};
  }

  render () {
    return (
      <View>
        <View style={styles.container}>
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
        </View>
      </View>
    );
  }
}
