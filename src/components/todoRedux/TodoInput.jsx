import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addArticle } from '../../redux/actions';
import { Lists } from '../todoRedux';

class TodoInput extends Component {
  state = {
    todo: '',
  };

  addTodo = () => {
    const { todo } = this.state;
    const { articles } = this.props;
    const id = articles.length;
    this.props.addArticle({ title: todo, done: false, id });
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
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  addArticle: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ articles: state.articles });
const mapDispatchToProps = dispatch => ({
  addArticle: article => dispatch(addArticle(article)),
});


export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);
