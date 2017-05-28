import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Animated,
  ScrollView,
  PanResponder
} from 'react-native';

import Modal from 'react-native-modalbox';

import styles from './styles';

export default class Comment extends Component {

  componentWillMount () {
    this.animated = new Animated.Value(0);
    this.animatedMargin = new Animated.Value(0);
    this.scrollOffset = 0;
    this.contentHeight = 0;
    this.scrollViewHeight = 0;

    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        const { dy } = gestureState;
        const totalScrollHeight = this.scrollOffset + this.scrollViewHeight;

        if (
          (this.scrollOffset <= 0 && dy > 0) ||
          ((totalScrollHeight >= this.contentHeight) && dy < 0)
        ) {
          return true;
        }
      },
      onPanResponderMove: (e, gestureState) => {
        const { dy } = gestureState;
        if (dy < 0) {
          this.animated.setValue(dy);
        } else if (dy > 0) {
          this.animatedMargin.setValue(dy);
        }
      },
      onPanResponderRelease: (e, gestureState) => {
        const { dy } = gestureState;
        if (dy < -150) {
          Animated.parallel([
            Animated.timing(this.animated, {
              toValue: -400,
              duration: 150
            }),
            Animated.timing(this.animatedMargin, {
              toValue: 0,
              duration: 159
            })
          ]).start();
          this.props.navigation.navigate('Home');
        } else if (dy > -150 && dy < 150) {
          console.log('but here');
          Animated.parallel([
            Animated.timing(this.animated, {
              toValue: 0,
              duration: 150
            }),
            Animated.timing(this.animatedMargin, {
              toValue: 0,
              duration: 150
            })
          ]).start();
        } else if (dy > 150) {
          console.log(this.props, 'bol');
          Animated.timing(this.animated, {
            toValue: 400,
            duration: 100
          }).start();
          this.props.navigation.navigate('Home');
        }
      }
    });
  }

  render () {
    const spacerStyle = {
      marginTop: this.animatedMargin
    };

    const opacityInterpolate = this.animated.interpolate({
      inputRange: [-400, 0, 400],
      outputRange: [0, 1, 0]
    });

    const modalStyle = {
      transform: [
        { translateY: this.animated }
      ],
      opacity: opacityInterpolate
    };

    return (
      <View style={styles.container}>
        <Animated.View style={spacerStyle} />
        <Animated.View
          style={modalStyle}
          {...this.panResponder.panHandlers}
          >
          <View style={{height: '100%'}}>
            <ScrollView
              scrollEventThrottle={16}
              onScroll={event => {
                this.scrollOffset = event.nativeEvent.contentOffset.y;
                this.scrollViewHeight = event.nativeEvent.layoutMeasurement.height;
              }}
              onContentSizeChange={(contentWidth, contentHeight) => {
                this.contentHeight = contentHeight;
              }}
                >
              <Text style={styles.fakeText}>Top</Text>
              <Text style={styles.fakeComments} />
              <Text style={styles.fakeText}>Bottom</Text>
            </ScrollView>
            <View style={{height: 50}}>
              <Text>Comment</Text>
            </View>
          </View>
        </Animated.View>
      </View>
    );
  }
}
