import React, { Component } from 'react';

import Post from './Post';

export default class Article extends Component {
  render () {
    return (
      <Post handleModalVisible={this.props.handleModalVisible} navigation={this.props.navigation} />
    );
  }
}
