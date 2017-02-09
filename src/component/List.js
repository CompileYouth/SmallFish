import React, { Component } from 'react';

import {
  ListView
} from 'react-native';

import Item from './Item';

export default class List extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      allTodos: ds.cloneWithRows([
        { text: 'todo1', date: '2017-02-07' },
        { text: 'todo2', date: '2017-02-07' },
        { text: 'todo3', date: '2017-02-07' },
        { text: 'todo4', date: '2017-02-07' },
        { text: 'todo5', date: '2017-02-07' }
      ])
    };
  }

  _renderTodo(todo) {
    return (<Item
      text={todo.text}
      date={todo.date}
    />);
  }

  render() {
    return (
      <ListView
        dataSource={this.state.allTodos}
        renderRow={this._renderTodo}
      />
    );
  }
}
