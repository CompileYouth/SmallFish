import React, { Component } from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

export default class Overlay extends Component {
  render() {
    return (
      <View
        style={styles.overlay}
      />
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: '#424242',
    opacity: 0.6
  }
});
