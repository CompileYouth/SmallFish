import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  View
} from 'react-native';

import Application from './app/Application';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class SmallFish extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Application />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#123456',
    width,
    height,
    paddingTop: 20
  }
});
