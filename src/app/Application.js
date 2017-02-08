import React, { Component } from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  PanResponder
} from 'react-native';

//import TodoList from '../component/List';

export default class Application extends Component {
  componentWillMount() {
    this._createItemPanResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
      onPanResponderGrant: this._handlePanResponderGrant,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderEnd,
      onPanResponderTerminate: this._handlePanResponderEnd
    });
  }

  _onPressIn() {
    console.log('You touched me');
  }

  _onPressOut() {
    console.log('Finally leave me alone.');
  }

  // Create Item PanResponder handlers
  _handleStartShouldSetPanResponder(e, gestureState) {
    console.log('start should set', e, gestureState);
    return true;
  }

  _handleMoveShouldSetPanResponder(e, gestureState) {
    console.log('move should set', e, gestureState);
    return true;
  }

  _handlePanResponderGrant(e, gestureState) {
    console.log('grant', e, gestureState);
  }

  _handlePanResponderMove(e, gestureState) {
    console.log('move', e, gestureState);
  }

  _handlePanResponderEnd(e, gestureState) {
    console.log('end', e, gestureState);
  }

  render() {
    return (
      <View
        style={styles.app}
        {...this._createItemPanResponder.panHandlers}
      >
        <Text>Hello SmallFish</Text>
        <TouchableHighlight
          onPressIn={this._onPressIn}
          onPressOut={this._onPressOut}
        >
          <Text>Hello, you can touch me</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#FDD7E4',
    flex: 1
  }
});
