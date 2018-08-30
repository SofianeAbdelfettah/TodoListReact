export const todoToDone = (todo, { list, updateParent }) => {
  const listCopy = list.map(listOfTodos => (
    listOfTodos.id === todo.id
      ? { ...todo, done: !todo.done }
      : listOfTodos
  ));
  updateParent(listCopy);
};

export const deleteTodo = (todo, { list, updateParent }) => {
  const listCopy = list.filter(listOfTodos => (listOfTodos.id !== todo.id));
  updateParent(listCopy);
};
