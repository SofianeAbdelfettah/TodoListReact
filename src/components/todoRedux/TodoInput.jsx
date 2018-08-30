import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTodo } from '../../redux/actions';
import { Lists } from '../todoRedux';

class TodoInput extends Component {
  state = {
    todo: '',
  };

  addTodo = () => {
    const { todo: title } = this.state;
    const { todo } = this.props;
    const id = todo.length;
    this.props.addTodo({ title, done: false, id });
  };

  render() {
    const { todo } = this.state;
    return (
      <div className="App">
        <h1>Welcome to Todolist with redux</h1>
        <div>
          <Lists />
          <input
            value={todo}
            placeholder="Valeur du Todo"
            onChange={(e) => {
              this.setState({ todo: e.target.value });
            }}
          />
          <button onClick={() => this.addTodo()}>Add Todo</button>
        </div>
      </div>
    );
  }
}

TodoInput.propTypes = {
  todo: PropTypes.arrayOf(PropTypes.object).isRequired,
  addTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ todo: state.todos });
const mapDispatchToProps = {
  addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);
