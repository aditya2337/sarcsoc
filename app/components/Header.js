import React, {Component} from 'react';
import { Button, Card } from 'react-native-material-design';
import { View, Text } from 'react-native';

export default class Header extends Component {
  render () {
    return (
      <View>
        <Card>
          <Card.Body>
            <Text>Some text to go in the body.</Text>
          </Card.Body>
          <Card.Actions position="right">
            <Button value="ACTION" />
          </Card.Actions>
        </Card>
      </View>
    );
  }
}