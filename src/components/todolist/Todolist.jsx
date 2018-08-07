import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Todolist extends Component {
  state = {
    name: '',
  };

  itemToDone = (item) => {
    const { list, updateParent } = this.props;
    const listCopy = list.map(obj => (
      obj.id === item.id
        ? { ...item, done: !item.done }
        : obj
    ));
    updateParent(listCopy);
  };

  deleteItem = (item) => {
    const { list, updateParent } = this.props;
    const listCopy = list.filter(obj => (obj.id !== item.id));
    updateParent(listCopy);
  };

  addTodo = () => {
    const { list, updateParent } = this.props;
    const todoId = list[list.length - 1].id + 1;
    const listCopy = list.concat({ value: this.state.name, done: false, id: todoId });
    updateParent(listCopy);
  };

  formatItem = item => (
    <li key={item.id}>
      { item.value }, { item.done.toString() }, { item.id }
      <button onClick={() => this.itemToDone(item)}>
      done
      </button>
      <button onClick={() => this.deleteItem(item)}>
      delete
      </button>
    </li>
  );
  render() {
    const { list } = this.props;
    const listItems = list.map(this.formatItem);
    return (
      <div className="App">
        <h1>Welcome to Todolist without Redux</h1>
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
      </div>
    );
  }
}

Todolist.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateParent: PropTypes.func.isRequired,
};
