import {
  createList
} from './list.actions';

import { 
  createTask,
  loadTasks,
  addTask, 
  removeTask, 
  changeTaskCompletion 
} from './task.actions';

it('loads tasks, creates then reuse', () => {
  const list = createList('List 1');
  const oldState = {
    lists: [list],
    tasksByListId: {}
  };

  const newState = loadTasks(oldState, list._id);

  expect(newState).toEqual({
    lists: [list],
    tasksByListId: {
      [list._id]: []
    },
    tasks: []
  });

  const newerState = loadTasks(newState, list._id);
  expect(newerState).toBe(newState);
});

it('adds a task to empty state tasks', () => {
  const newState = addTask({ tasks: [] }, 'new task');
  expect(newState).toEqual({
    tasks: [
      { _id: expect.any(String), title: 'new task', completed: false }
    ]
  });
});

it('adds a task and preservers existing state keys and tasks', () => {
  const existingTask = { _id: '123abc', title: 'existing task', completed: true };
  const state = { 
    name: 'foo',
    tasks: [ existingTask ]
  };
  const newState = addTask(state, 'new task');

  expect(newState).toEqual({
    name: 'foo',
    tasks: [
      existingTask,
      { _id: expect.any(String), title: 'new task', completed: false }
    ]
  });
});

it('remove a task by _id', () => {
  let state = { tasks: [] };
  state = addTask(state, 'task one');
  state = addTask(state, 'task two');

  const id = state.tasks[0]._id;

  const newState = removeTask(state, id);

  expect(newState).toEqual({
    tasks: [state.tasks[1]]
  });
});

it('change a task to completed', () => {
  let state = { tasks: [] };
  state = addTask(state, 'task one');
  state = addTask(state, 'task two');

  const firstTask = state.tasks[0];
  const _id = firstTask._id;

  const newState = changeTaskCompletion(state, { _id, completed: true });

  expect(newState).toEqual({
    tasks: [
      { ...firstTask, completed: true },
      state.tasks[1]
    ]
  });
});

