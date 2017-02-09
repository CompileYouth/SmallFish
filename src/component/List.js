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
        { text: 'todo1', date: '2017-02-07', prior: 1 },
        { text: 'todo2', date: '2017-02-07', prior: 2 },
        { text: 'todo3', date: '2017-02-07', prior: 3 },
        { text: 'todo4', date: '2017-02-07', prior: 4 },
        { text: 'todo5', date: '2017-02-07', prior: 5 },
        { text: 'todo2', date: '2017-02-07', prior: 6 },
        { text: 'todo3', date: '2017-02-07', prior: 7 },
        { text: 'todo4', date: '2017-02-07', prior: 8 },
        { text: 'todo5', date: '2017-02-07', prior: 9 },
      ])
    };
  }

  _renderTodo(todo) {
    return <Item />;
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
