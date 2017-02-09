import React from 'react';

import {
  ListView
} from 'react-native';

import List from '../component/List';

export default class TodoList extends List {
  _handleScroll(e) {
    if (e.nativeEvent.contentOffset.y < -10) {
      console.log('Now you can create a new item.');
    }
  }

  render() {
    const list = super.render();
    return React.cloneElement(list, { onScroll: this._handleScroll });
  }
}
