import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, List, Col, Row } from 'antd';
import { updateTodo, deleteTodo } from '../../redux/actions';

const mapStateToProps = state => ({ todos: state.todos });
const mapDispatchToProps = {
  updateTodoState: updateTodo,
  deleteTodoState: deleteTodo,
};

const ConnectedList = ({ todos, updateTodoState, deleteTodoState }) => (
  <List
    size="large"
    itemLayout="horizontal"
    dataSource={todos}
    renderItem={todo => (
      <List.Item>
        <Row gutter={48}>
          <Col span={10} style={{ paddingTop: 8 }}>
            {todo.title}, { todo.done.toString() }
          </Col>
          <Col span={7}>
            <Button
              icon="check"
              onClick={() => updateTodoState({ ...todo, done: !todo.done })}
            >
              done
            </Button>
          </Col>
          <Col span={5}>
            <Button
              icon="delete"
              type="danger"
              onClick={() => deleteTodoState({ ...todo })}
            >
            delete
            </Button>
          </Col>
        </Row>
      </List.Item>
    )}
    bordered
  />
);

ConnectedList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateTodoState: PropTypes.func.isRequired,
  deleteTodoState: PropTypes.func.isRequired,
};

const Lists = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

export default Lists;
