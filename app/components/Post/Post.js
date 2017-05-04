import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
// import { Card, Button } from 'react-native-material-design';
import { Avatar, COLOR, Card, ListItem, IconToggle, Badge } from 'react-native-material-ui';
import styles from './styles';
import Share from 'react-native-share';

export default class HomeContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {
      openStatus: true,
      description: `Sed ut perspiciatis unde omnis iste natus error sit a git` +
      ` a day doloremque laudantium,` +
      `totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et` +
      ` quasi architecto beatae vitae dicta sunt explicabo.`,
      message: 'John Mitri',
      likes: 32,
      dislikes: 20,
      liked: false,
      disliked: false,
      likedColor: null,
      dislikedColor: null
    };
  }

  handleShare = () => {
    const { description, message } = this.state;
    let shareOptions = {
      title: message,
      message: description,
      url: 'https://www.readerscave.com/',
      subject: 'Share Link' //  for email
    };
    Share.open(shareOptions);
  }

  onLike = () => {
    let {likes, liked, likedColor } = this.state;
    if (!liked) {
      liked = !liked;
      likes++;
      likedColor = COLOR.green500;
      this.setState({ likes, liked, likedColor });
    } else {
      liked = !liked;
      likes--;
      likedColor = null;
      this.setState({ likes, liked, likedColor });
    }
  }

  onDislike = () => {
    let {dislikes, disliked, dislikedColor} = this.state;
    if (!disliked) {
      disliked = !disliked;
      dislikes++;
      dislikedColor = COLOR.red500;
      this.setState({ dislikes, disliked, dislikedColor });
    } else {
      disliked = !disliked;
      dislikes--;
      dislikedColor = null;
      this.setState({ dislikes, disliked, dislikedColor });
    }
  }

  render () {
    const { description, message, likes, dislikes, likedColor, dislikedColor } = this.state;
    return (
      <Card>
        <ListItem
          leftElement={<Avatar text='JM' />}
          centerElement={{
            primaryText: message,
            secondaryText: '3 weeks ago'
          }}
          />
        <View style={styles.textContainer}>
          <Text>
            {description}
          </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Badge text={likes} style={{ container: { top: -1, right: -5 } }}>
              <IconToggle name='thumb-up' onPress={this.onLike} color={likedColor} />
            </Badge>
          </View>
          <View>
            <Badge text={dislikes} accent style={{ container: { top: -1, right: -5 } }}>
              <IconToggle name='thumb-down' onPress={this.onDislike} color={dislikedColor} />
            </Badge>
          </View>
          <View>
            <IconToggle name='share' onPress={this.handleShare} />
          </View>
        </View>
      </Card>
    );
  }
}
