
const store = {
  load() {
    let initialState = {
      lists: [],
      todosByListId: {}
    };
    
    const state = window.localStorage.getItem('state');
    if(state) {
      initialState = JSON.parse(state);
    }
    return initialState;
  },
  save(state) {
    const { lists, todosByListId } = state;
    const json = JSON.stringify({ lists, todosByListId });
    window.localStorage.setItem('state', json);
  }
};

export default store;