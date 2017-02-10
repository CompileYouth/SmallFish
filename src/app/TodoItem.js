import React, { PropTypes } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import Item from '../component/Item';

export default class Application extends Item {
  componentWillMount() {

  }

  _handleItemPress(e) {
    console.log(e.nativeEvent.target);
  }

  render() {
    return (
      <TouchableHighlight
        style={[styles.item, styles[`prior${this.props.prior}`]]}
        onPress={this._handleItemPress}
        underlayColor={todoColors[this.props.prior]}
      >
        <View style={styles.itemContainer}>
          <Text style={styles.text}>{this.props.text}</Text>
          { this.props.date ? <Text style={styles.time}>{this.props.date}</Text> : null }
        </View>
      </TouchableHighlight>
    );
  }
}

const todoColors = ['#D50000', '#EF5350', '#E57373', '#FFCDD2', '#E1F5FE', '#B3E5FC', '#81D4FA', '#4FC3F7', '#29B6F6'];

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'lightgrey',
    height: 50,
    justifyContent: 'center'
  },
  itemContainer: {
    marginLeft: 15
  },
  text: {
    fontSize: 20,
    color: '#212121',
    fontFamily: 'Helvetica'
  },
  time: {
    fontSize: 12,
    color: '#212121',
    fontFamily: 'Helvetica'
  },
  prior0: {
    backgroundColor: todoColors[0]
  },
  prior1: {
    backgroundColor: todoColors[1]
  },
  prior2: {
    backgroundColor: todoColors[2]
  },
  prior3: {
    backgroundColor: todoColors[3]
  },
  prior4: {
    backgroundColor: todoColors[4]
  },
  prior5: {
    backgroundColor: todoColors[5]
  },
  prior6: {
    backgroundColor: todoColors[6]
  },
  prior7: {
    backgroundColor: todoColors[7]
  },
  prior8: {
    backgroundColor: todoColors[8]
  }
});
