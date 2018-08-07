const initialState = {
  articles: [
    { title: 'coucou', done: false, id: 0 },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ARTICLE':
      return { ...state, articles: [...state.articles, action.payload] };
    case 'DELETE_ARTICLE': {
      const newList = state.articles.filter(obj => (obj.id !== action.payload.id));
      return { ...state, articles: newList };
    }
    case 'UPDATE_ARTICLE': {
      const newList = state.articles.map(obj => (
        obj.id === action.payload.id
          ? action.payload
          : obj
      ));
      return { ...state, articles: newList };
    }
    default:
      return state;
  }
};
export default rootReducer;
