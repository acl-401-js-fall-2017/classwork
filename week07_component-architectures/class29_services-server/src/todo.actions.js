import shortid from 'shortid';

export const createTodo = title => ({ 
  _id: shortid.generate(),
  title, 
  completed: false 
});


export function addTodo(state, todo) {
  return {
    ...state,
    todos: [
      ...state.todos,
      todo
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

export function updateTodo(state, todo) {
  const { todos } = state;
  const index = todos.findIndex(t => t._id === todo._id);
  if(index === -1) return state;
  
  return {
    ...state,
    todos: [
      ...todos.slice(0, index),
      todo,
      ...todos.slice(index + 1)
    ]
  };
}