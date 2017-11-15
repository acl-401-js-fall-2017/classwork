import shortid from 'shortid';

const createTodo = title => ({ 
  _id: shortid.generate(),
  title, 
  completed: false 
});

export function loadTodos(state) {
  return {
    ...state,
    todos: [
      createTodo('Learn React'),
      createTodo('Forget React'),
      createTodo('Relearn React'),
    ]
  };
}

export function addTodo(state, title) {
  return {
    ...state,
    todos: [
      ...state.todos,
      createTodo(title)
    ]
  };
}