import { connect } from 'react-redux';
import { updateArticle, deleteArticle } from '../../redux/actions';


const mapStateToProps = state => ({ articles: state.articles });
const mapDispatchToProps = dispatch => ({
  updateArticleState: articleUpdated => dispatch(updateArticle(articleUpdated)),
  deleteArticleState: deletedArticle => dispatch(deleteArticle(deletedArticle)),
});

/*  eslint-disable-next-line */
const ConnectedList = ({ articles, updateArticleState, deleteArticleState }) => (
  <ul className="list-group list-group-flush">
    {articles.map(todo => (
      <li className="list-group-item" key={todo.id}>
        {todo.title}, { todo.done.toString() }
        <button onClick={() => updateArticleState({ ...todo, done: !todo.done })} >done</button>
        <button onClick={() => deleteArticleState({ ...todo })} >delete</button>
      </li>
    ))}
  </ul>
);

const Lists = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

export default Lists;
