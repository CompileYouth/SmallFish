import React from 'react';

import {
  View
} from 'react-native';

import TodoItem from './TodoItem';
import List from '../component/List';

export default class TodoList extends List {
  constructor() {
    super();
    this._handleItemClick = this._handleItemClick.bind(this);
  }

  _handleScroll(e) {
    if (e.nativeEvent.contentOffset.y < -10) {
      console.log('Now you can create a new item.');
    }
  }

  _renderTodo(todo) {
    return (<TodoItem
      prior={todo.prior}
      text={todo.text}
      date={todo.date}
      onClick={this._handleItemClick}
    />);
  }

  _renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={{
          height: adjacentRowHighlighted ? 0.5 : 0.5,
          backgroundColor: adjacentRowHighlighted ? '#FAFAFA' : '#FAFAFA',
        }}
      />
    );
  }

  _handleItemClick(e) {
    console.log(e);
  }

  render() {
    const list = super.render();
    return React.cloneElement(list, {
      onScroll: this._handleScroll,
      renderSeparator: this._renderSeparator
    });
  }
}
