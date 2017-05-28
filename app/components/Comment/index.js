import React, { Component } from 'react';

import Comment from './Comment';

export default class CommentModal extends Component {
  render () {
    return (
      <Comment visible={this.props.visible} navigation={this.props.navigation} />
    );
  }
}
