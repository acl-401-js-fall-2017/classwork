import React from 'react';
import { addTodo } from './actions';

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
