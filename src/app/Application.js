import React, { Component } from 'react';

import {
  Text,
  View,
  TextInput,
  StyleSheet
} from 'react-native';

//import TodoList from '../component/List';

export default class Application extends Component {
  render() {
    return (
      <View style={styles.app}>
        <Text>Hello SmallFish</Text>
        <Text>Hello SmallFish</Text>
        <Text>Hello SmallFish</Text>
        <Text>Hello SmallFish</Text>
        <Text>Hello SmallFish</Text>
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
