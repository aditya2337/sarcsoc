import React, { Component } from 'react';
import { Toolbar } from 'react-native-material-ui';

export default class Header extends Component {

  render () {
    return (
      <Toolbar
        leftElement='menu'
        centerElement='Sarcasm Society'
        onLeftElementPress={this.props.openDrawer}
        searchable={{
          autoFocus: true,
          placeholder: 'Search',
        }}
      />
    );
  }
}
