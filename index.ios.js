/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

import Application from './src/app/Application';

export default class SmallFish extends Component {
  render() {
    return (
      <View>
        <Application />
      </View>
    );
  }
}

AppRegistry.registerComponent('SmallFish', () => SmallFish);
