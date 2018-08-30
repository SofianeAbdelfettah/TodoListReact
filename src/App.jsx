import { Component } from 'react';
import { Row, Col } from 'antd';
import './App.css';
import Todolist from './components/todolist';
import { TodoInput } from './components/todoRedux';
import SideMenu from './components/SubMenu/SubMenu';

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
        <Row gutter={8} align="middle">
          <Col span={6}>
            <SideMenu />
          </Col>
          <Col span={9}>
            <Todolist list={list} updateParent={this.updateState} />
          </Col>
          <Col span={9}>
            <TodoInput />
          </Col>
        </Row>
      </div>
    );
  }
}
