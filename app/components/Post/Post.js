import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
// import { Card, Button } from 'react-native-material-design';
import { Avatar, Card, ListItem, IconToggle, Badge } from 'react-native-material-ui';
import styles from './styles';

export default class HomeContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {openStatus: true};
  }

  render () {
    return (
      <Card>
        <ListItem
          leftElement={<Avatar text='JM' />}
          centerElement={{
            primaryText: 'John Mitri',
            secondaryText: '3 weeks ago'
          }}
          />
        <View style={styles.textContainer}>
          <Text>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
            quasi architecto beatae vitae dicta sunt explicabo.
          </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View>
            <Badge text='32' style={{ container: { top: -1, right: -5 } }}>
              <IconToggle name='thumb-up' />
            </Badge>
          </View>
          <View>
            <Badge text='20' accent style={{ container: { top: -1, right: -5 } }}>
              <IconToggle name='thumb-down' />
            </Badge>
          </View>
        </View>
      </Card>
    );
  }
}
