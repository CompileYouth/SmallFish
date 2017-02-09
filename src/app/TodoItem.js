import React, { PropTypes } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Item from '../component/Item';

export default class Application extends Item {
  componentWillMount() {

  }

  render() {
    console.log('prior' + 0);
    return (
      <View style={[styles.item, styles['prior' + this.props.prior]]}>
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
    borderBottomWidth: 1
  },
  text: {

  },
  time: {

  },
  prior1: {
    backgroundColor: '#D50000'
  },
  prior2: {
    backgroundColor: '#EF5350'
  },
  prior3: {
    backgroundColor: '#E57373'
  },
  prior4: {
    backgroundColor: '#FFCDD2'
  },
  prior5: {
    backgroundColor: '#E1F5FE'
  },
  prior6: {
    backgroundColor: '#B3E5FC'
  },
  prior7: {
    backgroundColor: '#81D4FA'
  },
  prior8: {
    backgroundColor: '#4FC3F7'
  },
  prior9: {
    backgroundColor: '#29B6F6'
  }
});
