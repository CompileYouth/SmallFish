import React, { Component } from 'react';

import {
  StyleSheet,
  TouchableHighlight,
  View
} from 'react-native';

export default class Overlay extends Component {
  constructor() {
    super();
    this._handlePress = this._handlePress.bind(this);
  }

  _handlePress() {
    this.props.onClick();
  }

  render() {
    return (
      <TouchableHighlight
        style={styles.overlay}
        underlayColor={'#424242'}
        onPress={this._handlePress}
      >
        <View />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: '#424242',
    opacity: 0.6,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 50
  }
});
