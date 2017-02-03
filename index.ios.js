/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

export default class SmallFish extends Component {
  render() {
    return (
      <View>
        <Text>
          Just for test!hahah
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('SmallFish', () => SmallFish);
