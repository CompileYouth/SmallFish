import React, { Component } from 'react';

import {
  ListView
} from 'react-native';

import Item from './Item';

export default class List extends Component {
  constructor() {
    super();
    this._renderTodo = this._renderTodo.bind(this);
  }

  componentWillMount() {
    this.todos = [
      { text: '吃饭', date: '2017-02-07 10:08', prior: 0, index: 0 },
      { text: '睡觉', date: '2017-02-07 10:08', prior: 1, index: 1 },
      { text: '打豆豆', date: '2017-02-07 10:08', prior: 2, index: 2 },
      { text: '吃饭', prior: 3, index: 3 },
      { text: '睡觉', date: '2017-02-07 10:08', prior: 4, index: 4 },
      { text: '打豆豆', date: '2017-02-07 10:08', prior: 5, index: 5 },
      { text: '吃饭', prior: 6, index: 6 },
      { text: '睡觉', date: '2017-02-07 10:08', prior: 7, index: 7 },
      { text: '打豆豆', date: '2017-02-07 10:08', prior: 8, index: 8 },
    ];
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      allTodos: this.ds.cloneWithRows(this.todos)
    };
  }

  _renderTodo() {
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
