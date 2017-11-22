Redux State Management
===

## Misc
* Makeup Backend Quiz
* ?

## Redux Review

### Store

1. Combination of state and reducers (which take actions)
1. State is immutable

* `createStore(reducer[, initialState, applyMiddleware])`
    * optional: `initialState`, `applyMiddleware`
* Store methods are generally handled by adapter to the view (`react-redux`):
    * `dispatch` - send an action to the store reducer
    * `subscribe(listener)` - be notified when store state "changes"
    * `getState()` - get the current store state

So, we need a reducer...

### Combine Reducers

Perform discrete change of store (by creating a new state) based on an action. 

Don't need to be in one file. Use `combineReducers`. These are "segmented" by part of the
store that you need. They don't have access (by default) to rest of store. 

(Typically this is a good thing, but we'll see with thunks and async where it makes sense, and then provide a way to pass more data from store if needed.)

**BUT**, all actions still flow through all reducers because one action may require changes to multiple parts of the state.

```js
// file: ./reducers/index.js

import { combineReducers } from 'redux';
// sibling files in "./reducers":
import stores from './stores';
import store from './store';
import pets from './pets';

export default combineReducers({
  stores,
  store,
  pets
});

// file: ./index.js
import { createStore } from 'redux';
import reducer from './reducers/index';

const store = createStore(reducer);

```

Multiple reducers can respond to the same action. 

### Testing Reducers

Reducers are pure functions, we simply pass current state and action
and assert that response is expected.

### Selectors

Data projections are called "selectors". Example: filtered list.