import React, { Component } from 'react';
import {
  Text
} from 'react-native';
import { Card, Button } from 'react-native-material-design';
import styles from './styles';

export default class HomeContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {openStatus: true};
  }

  render () {
    return (
      <Card style={styles.flex}>
        <Text>Article/Post 1</Text>
      </Card>
    );
  }
}
