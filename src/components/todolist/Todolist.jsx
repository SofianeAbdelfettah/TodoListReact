import { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'antd';
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

  formatTodo = (todo, updateParent, list) => (
    <li key={todo.id}>
      { todo.value }, { todo.done.toString() }, { todo.id }
      <Button icon="check" onClick={() => todoToDone(todo, { list, updateParent })}>
      done
      </Button>
      <Button icon="delete" type="danger" onClick={() => deleteTodo(todo, { list, updateParent })}>
      delete
      </Button>
    </li>
  );

  render() {
    const { list, updateParent } = this.props;
    const listItems = list.map(todo => this.formatTodo(todo, updateParent, list));
    return (
      <div className="App">
        <Card title="Todolist without Redux">
          <ul>{listItems}</ul>
          <div>
            <input
              value={this.state.name}
              placeholder="Valeur du Todo"
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
            <button onClick={() => this.addTodo()}>Add Todo</button>
          </div>
        </Card>
      </div>
    );
  }
}

Todolist.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateParent: PropTypes.func.isRequired,
};
