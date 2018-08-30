import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateTodo, deleteTodo } from '../../redux/actions';

const mapStateToProps = state => ({ todos: state.todos });
const mapDispatchToProps = {
  updateTodoState: updateTodo,
  deleteTodoState: deleteTodo,
};

const ConnectedList = ({ todos, updateTodoState, deleteTodoState }) => (
  <ul className="list-group list-group-flush">
    {todos.map(todo => (
      <li className="list-group-item" key={todo.id}>
        {todo.title}, { todo.done.toString() }
        <button onClick={() =>
          updateTodoState({ ...todo, done: !todo.done })}
        >
          done
        </button>
        <button onClick={() =>
          deleteTodoState({ ...todo })}
        >
         delete
        </button>
      </li>
    ))}
  </ul>
);

ConnectedList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateTodoState: PropTypes.func.isRequired,
  deleteTodoState: PropTypes.func.isRequired,
};

const Lists = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

export default Lists;
