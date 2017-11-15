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

export function removeTodo(state, _id) {
  const index = state.todos.findIndex(t => t._id === _id);
  if(index === -1) return state;

  const todos = state.todos.slice();
  todos.splice(index, 1);
  
  return {
    ...state,
    todos
  };
}

export function changeTodoCompletion(state, { _id, completed }) {
  const { todos } = state;
  const index = todos.findIndex(t => t._id === _id);
  if(index === -1) return state;
  
  return {
    ...state,
    todos: [
      ...todos.slice(0, index),
      { ...todos[index], completed },
      ...todos.slice(index + 1)
    ]
  };
}