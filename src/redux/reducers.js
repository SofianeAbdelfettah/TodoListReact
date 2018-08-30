const initialState = {
  todos: [
    { title: 'coucou', done: false, id: 0 },
  ],
};

const rootReducer = (
  state = initialState,
  actions,
) => {
  const { todos } = state;
  const { payload, type } = actions;
  switch (type) {
    case 'ADD_TODO':
      return { ...state, todos: [...todos, payload] };
    case 'DELETE_TODO': {
      const newTodos = todos.filter(obj => obj.id !== payload.id);
      return { ...state, todos: newTodos };
    }
    case 'UPDATE_TODO': {
      const newTodos = todos.map(todo => (
        todo.id === payload.id
          ? payload
          : todo
      ));
      return { ...state, todos: newTodos };
    }
    default:
      return state;
  }
};

export default rootReducer;
