const { createStore } = require('redux');

function countReducer(state = 0, { type }) {
  switch(type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default: 
      return state;
  }
}

const store = createStore(countReducer);
store.subscribe(() => {
  console.log('store changed', store.getState());
});

store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });