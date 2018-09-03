import { Component } from 'react';
import { Row, Col, Layout } from 'antd';
import 'antd/dist/antd.css';
import Todolist from './components/todolist';
import { TodoInput } from './components/todoRedux';
import Header from './components/Header/Header';

const { Content } = Layout;

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
        <Header />
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
          <Content style={{ padding: '0 50px', marginTop: 64 }}>
            <h1>Welcome to {name}</h1>
            <Row type="flex" justify="space-around" align="middle">
              <Col
                md={{ span: 24 }}
                lg={{ span: 15 }}
                xl={{ span: 10 }}
                xxl={{ span: 15 }}
                style={{ marginTop: 9 }}
              >
                <Todolist list={list} updateParent={this.updateState} />
              </Col>
              <Col
                md={{ span: 24 }}
                lg={{ span: 15 }}
                xl={{ span: 10 }}
                xxl={{ span: 15 }}
                style={{ marginTop: 9 }}
              >
                <TodoInput />
              </Col>
            </Row>
          </Content>
        </div>
      </div>
    );
  }
}
