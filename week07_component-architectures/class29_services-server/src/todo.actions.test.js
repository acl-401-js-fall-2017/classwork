import {
  createList
} from './list.actions';

import { 
  createTodo,
  loadTodos,
  addTodo, 
  removeTodo, 
  changeTodoCompletion 
} from './todo.actions';

it('loads todos, creates then reuse', () => {
  const list = createList('List 1');
  const oldState = {
    lists: [list],
    todosByListId: {}
  };

  const newState = loadTodos(oldState, list._id);

  expect(newState).toEqual({
    lists: [list],
    todosByListId: {
      [list._id]: []
    },
    todos: []
  });

  const newerState = loadTodos(newState, list._id);
  expect(newerState).toBe(newState);
});

it('adds a todo to empty state todos', () => {
  const newState = addTodo({ todos: [] }, 'new todo');
  expect(newState).toEqual({
    todos: [
      { _id: expect.any(String), title: 'new todo', completed: false }
    ]
  });
});

it('adds a todo and preservers existing state keys and todos', () => {
  const existingTodo = { _id: '123abc', title: 'existing todo', completed: true };
  const state = { 
    name: 'foo',
    todos: [ existingTodo ]
  };
  const newState = addTodo(state, 'new todo');

  expect(newState).toEqual({
    name: 'foo',
    todos: [
      existingTodo,
      { _id: expect.any(String), title: 'new todo', completed: false }
    ]
  });
});

it('remove a todo by _id', () => {
  let state = { todos: [] };
  state = addTodo(state, 'todo one');
  state = addTodo(state, 'todo two');

  const id = state.todos[0]._id;

  const newState = removeTodo(state, id);

  expect(newState).toEqual({
    todos: [state.todos[1]]
  });
});

it('change a todo to completed', () => {
  let state = { todos: [] };
  state = addTodo(state, 'todo one');
  state = addTodo(state, 'todo two');

  const firstTodo = state.todos[0];
  const _id = firstTodo._id;

  const newState = changeTodoCompletion(state, { _id, completed: true });

  expect(newState).toEqual({
    todos: [
      { ...firstTodo, completed: true },
      state.todos[1]
    ]
  });
});

