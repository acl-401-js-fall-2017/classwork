import shortid from 'shortid';

export const createList = title => ({ 
  _id: shortid.generate(),
  title
});

export function loadLists(state, lists) {
  return {
    ...state,
    lists
  };
}

export function addList(state, title) {
  return {
    ...state,
    lists: [
      ...state.lists,
      createList(title)
    ]
  };
}

export function removeList(state, _id) {
  const { lists } = state;
  const index = lists.findIndex(l => l._id === _id);
  if(index === -1) return state;
  return {
    lists: [
      ...lists.slice(0, index),
      ...lists.slice(index + 1)
    ]
  };
}