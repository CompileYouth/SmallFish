import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  PanResponder
} from 'react-native';

import TodoList from './TodoList';
import Overlay from './Overlay';

export default class Application extends Component {
  constructor() {
    super();
    this._handleOverlayClick = this._handleOverlayClick.bind(this);
    this._handleTodoListItemClick = this._handleTodoListItemClick.bind(this);
  }

  componentWillMount() {
    this.state = {
      showOverlay: false,
      showAllTodos: true
    };

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

  _handleOverlayClick() {
    this.setState({
      showOverlay: false,
      showAllTodos: true
    });
  }

  _handleTodoListItemClick() {
    this.setState({
      showOverlay: true,
      showAllTodos: false
    });
  }

  render() {
    return (
      <View
        style={styles.app}
      >
        <TodoList
          onItemClick={this._handleTodoListItemClick}
          showAllTodos={this.state.showAllTodos}
        />
        {this.state.showOverlay ? <Overlay onClick={this._handleOverlayClick} /> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#212121',
    flex: 1
  }
});
