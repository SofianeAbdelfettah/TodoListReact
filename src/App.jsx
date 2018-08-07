import { Component } from 'react';
import './App.css';
import Todolist from './components/todolist';
import { TodoInput } from './components/todoRedux';

export default class App extends Component {
  state = {
    name: 'reactredux',
    list: [
      { value: 'do something', done: false, id: 0 },
    ],
  };
  updateState = (list) => {
    this.setState({ list });
  };
  render() {
    const { name, list } = this.state;
    return (
      <div className="App">
        <h1>Welcome to {name}</h1>
        <Todolist list={list} updateParent={this.updateState} />
        <TodoInput />
      </div>
    );
  }
}
