import React, { PropTypes } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Item from '../component/Item';

export default class Application extends Item {
  render() {
    return (
      <View style={[styles.item, { backgroundColor: 'red' }]}>
        <Text>Hello Item</Text>
        <Text>Today 10:20</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'lightgrey',
    height: 50,
    borderBottomColor: 'lightslategray',
    borderBottomWidth: 3
  },
  text: {

  },
  time: {

  }
});
