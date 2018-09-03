import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Input, Icon, Button, Card } from 'antd';
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

  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ todo: '' });
  }

  render() {
    const { todo } = this.state;
    const suffix = todo ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    return (
      <div className="App">
        <Card title="Todolist with Redux">
          <div>
            <Lists />
            <Input
              style={{ marginTop: 8 }}
              placeholder="Enter your new Todo"
              prefix={<Icon type="check-square-o" style={{ color: 'rgba(0,0,0,.25)' }} />}
              suffix={suffix}
              value={todo}
              onChange={(e) => {
                this.setState({ todo: e.target.value });
              }}
              ref={(node) => { this.userNameInput = node; }}
            />
            <Button
              style={{ marginTop: 8 }}
              onClick={() => this.addTodo()}
            >
              Add Todo
            </Button>
          </div>
        </Card>
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
