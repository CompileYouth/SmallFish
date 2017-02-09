import React, { Component, PropTypes } from 'react';

import {
  View,
  Text
} from 'react-native';

export default class Application extends Component {
  static propTypes = {
    text: PropTypes.string,
    date: PropTypes.string
  }

  render() {
    return (
      <View>
        <Text>{this.props.text}</Text>
        <Text>{this.props.date}</Text>
      </View>
    );
  }
}
