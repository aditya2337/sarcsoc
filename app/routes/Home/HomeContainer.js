import React, { Component } from 'react';
import {
  View,
  ScrollView
} from 'react-native';

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
        <ScrollView style={styles.container}>
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
        </ScrollView>
      </View>
    );
  }
}
