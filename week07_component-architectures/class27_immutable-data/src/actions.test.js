import React from 'react';
import { addTodo, removeTodo, changeTodoCompletion } from './actions';

function cleanIds(todos) {
  todos.forEach(t => {
    expect(t._id).toBeDefined();
    delete t._id;
  });
}

it('adds a todo to empty state todos', () => {
  const newState = addTodo({ todos: [] }, 'new todo');
  cleanIds(newState.todos);
  expect(newState).toEqual({
    todos: [
      { title: 'new todo', completed: false }
    ]
  });
});

it('adds a todo and preservers existing state keys and todos', () => {
  const state = { 
    todos: [
      { _id: 123, title: 'existing todo', completed: true }
    ], 
    name: 'foo' 
  };
  const newState = addTodo(state, 'new todo');
  cleanIds(newState.todos);

  expect(newState).toEqual({
    name: 'foo',
    todos: [
      { title: 'existing todo', completed: true },
      { title: 'new todo', completed: false }
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

