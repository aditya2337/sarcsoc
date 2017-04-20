import React, { Component } from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';
import { Button, Card } from 'react-native-material-ui';
import images from '../../config/images';
import styles from './styles';

export default class HomeContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {openStatus: true};
  }

  render () {
    return (
      <View>
        <View style={styles.container}>
          <Card >
            <Text>Article/Post 1</Text>
          </Card>
        </View>
      </View>
    );
  }
}
