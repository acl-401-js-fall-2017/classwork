import shortid from 'shortid';

let store = {
  lists: [],
  todosByListId: {}
};

let data = window.localStorage.getItem('data');   
if(data) store = JSON.parse(data);

window.onbeforeunload = () => {
  const json = JSON.stringify(store);
  window.localStorage.setItem('data', json);
};

export const listApi = {
  get() {
    return Promise.resolve(store.lists.slice());
  },
  add(list) {
    const saved = { ...list, _id: shortid.generate() };
    store.lists.push(saved);
    return Promise.resolve(saved);
  },
  remove(id) {
    const index = store.lists.findIndex(l => l._id = id);
    if(index !== -1) store.lists.splice(index, 1);
    return Promise.resolve();
  }
};

export const todoApi = {
  get(listId) {
    let todos = store.todosByListId[listId];
    if(!todos) todos = store.todosByListId[listId] = [];
    return Promise.resolve(todos.slice());
  },
  add(listId, todo) {
    const saved = { ...todo, _id: shortid.generate() };
    let todos = store.todosByListId[listId];
    if(!todos) todos = store.todosByListId[listId] = [];
    
    todos.push(saved);
    return Promise.resolve(saved);
  },
  update(listId, todo) {
    let todos = store.todosByListId[listId];
    const index = todos.findIndex(l => l._id = todo.id);
    if(index !== -1) todos.splice(index, 1);
    return { ...todo };
  },
  remove(listId, id) {
    const todos = store.todosByListId[listId];    
    if(todos) {
      const index = todos.findIndex(l => l._id = id);
      if(index !== -1) todos.splice(index, 1);
    }
    return Promise.resolve();
  }
};

export default store;