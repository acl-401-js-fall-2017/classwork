import shortid from 'shortid';
import store from './store';

export const createTodo = title => ({ 
  _id: shortid.generate(),
  title, 
  completed: false 
});

export function loadTodos(state, listId) {
  const storeState = store.load();
  // get our existing byId dictionary
  let { todosByListId } = storeState;
  // try and get the todos for the id we were provide
  let todos = todosByListId[listId];
  
  // no match?
  if(!todos) {
    // create empty array and but in store for later
    todos = [];
    storeState.todosByListId[listId] = todos;
    store.save(storeState);
  }

  // is this same as existing todo?
  if(todos === state.todos) return state;

  // otherwise, set todos to new list
  return {
    ...state,
    todos
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