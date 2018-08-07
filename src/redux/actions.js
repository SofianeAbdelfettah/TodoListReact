export const addArticle = article => ({ type: 'ADD_ARTICLE', payload: article });
export const updateArticle = articleUpdated => ({ type: 'UPDATE_ARTICLE', payload: articleUpdated });
export const deleteArticle = articleDeleted => ({ type: 'DELETE_ARTICLE', payload: articleDeleted });
