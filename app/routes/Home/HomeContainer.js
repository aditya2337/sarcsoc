import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Picker
} from 'react-native';
import { Select, Option } from 'react-native-select-list';

import styles from './styles';

import Article from '../../components/Post';
export default class HomeContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {openStatus: true, see: 'I wanna see', read: 'I wanna read'};
  }

  render () {
    return (
      <View>
        <ScrollView>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Picker
              selectedValue={this.state.see}
              onValueChange={(val) => this.setState({see: val})}
              style={{width: '50%'}}>
              <Picker.Item label='Images' value='img' />
              <Picker.Item label='Videos' value='vid' />
            </Picker>
            <Picker
              selectedValue={this.state.read}
              onValueChange={(val) => this.setState({read: val})}
              style={{width: '50%'}}>
              <Picker.Item label='Text' value='txt' />
              <Picker.Item label='Something' value='smthng' />
            </Picker>
          </View>
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
