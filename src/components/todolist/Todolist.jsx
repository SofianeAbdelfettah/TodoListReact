import { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Input, Icon, List, Col, Row } from 'antd';
import { deleteTodo, todoToDone } from '../../helpers/methods';

export default class Todolist extends Component {
  state = {
    name: '',
  };

  addTodo = () => {
    const { list, updateParent } = this.props;
    const todoId = list[list.length - 1].id + 1;
    const todo = { value: this.state.name, done: false, id: todoId };
    const listCopy = [...list, { ...todo }];
    updateParent(listCopy);
  };

  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ name: '' });
  }

  render() {
    const { list, updateParent } = this.props;
    const { name } = this.state;

    const renderTodos = todo => (
      <List.Item>
        <Row gutter={48}>
          <Col span={10} style={{ paddingTop: 8 }}>
            { todo.value }
          </Col>
          <Col span={7}>
            <Button
              icon="check"
              onClick={() => todoToDone(todo, { list, updateParent })}
            >
            done
            </Button>
          </Col>
          <Col span={5}>
            <Button
              icon="delete"
              type="danger"
              onClick={() => (
                deleteTodo(todo, { list, updateParent })
              )}
            >
            delete
            </Button>
          </Col>
        </Row>
      </List.Item>
    );

    const suffix = name ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    return (
      <div className="App">
        <Card title="Todolist without Redux">
          <List
            size="large"
            itemLayout="horizontal"
            dataSource={list}
            renderItem={renderTodos}
            bordered
          />
          <Input
            style={{ marginTop: 8 }}
            placeholder="Enter your new Todo"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            suffix={suffix}
            value={name}
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
            ref={(node) => { this.userNameInput = node; }}
          />
          <Button
            style={{ marginTop: 8 }}
            onClick={() => this.addTodo()}
          >
            Add Todo
          </Button>
        </Card>
      </div>
    );
  }
}

Todolist.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateParent: PropTypes.func.isRequired,
};
