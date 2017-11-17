import { createList, loadLists, addList, removeList } from './list.actions';

const createThree = () => Array(3).fill().map((ignored, i) => createList(`List ${i}`));

it('loadLists', () => {
  const lists = createThree();
  const state = loadLists({}, lists);
  expect(state).toEqual({
    lists
  });
});

it('addList', () => {
  const existing = createList('existing list');
  const oldState = { lists: [existing] };
  const newState = addList(oldState, 'new list');
  expect(newState).toEqual({
    lists: [
      existing,
      { _id: expect.any(String), title: 'new list' }
    ]
  });
});

it('removeList', () => {
  const lists = createThree();
  const oldState = { lists };
  const newState = removeList(oldState, lists[1]._id);
  expect(newState).toEqual({
    lists: [lists[0], lists[2]]
  });
});