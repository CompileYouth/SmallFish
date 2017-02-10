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
        { text: '吃饭', date: '2017-02-07 10:08', prior: 0 },
        { text: '睡觉', date: '2017-02-07 10:08', prior: 1 },
        { text: '打豆豆', date: '2017-02-07 10:08', prior: 2 },
        { text: '吃饭', prior: 3 },
        { text: '睡觉', date: '2017-02-07 10:08', prior: 4 },
        { text: '打豆豆', date: '2017-02-07 10:08', prior: 5 },
        { text: '吃饭', prior: 6 },
        { text: '睡觉', date: '2017-02-07 10:08', prior: 7 },
        { text: '打豆豆', date: '2017-02-07 10:08', prior: 8 },
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
