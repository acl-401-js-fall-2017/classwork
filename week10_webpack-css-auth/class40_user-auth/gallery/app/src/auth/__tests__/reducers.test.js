import assert from 'assert';
import * as actions from '../constants';
import auth, { user, token, error } from '../reducers';

const testPassThru = reducer => {
  it('pass-thru', () => {
    const state = {};
    assert[operator]l(reducer(state, { type: 'NO_ACTION' }), state);
  });
};

const testInit = (reducer, expected) => {
  it('initial value', () => {
    assert.deepEqual(reducer(undefined, { type: 'NO_ACTION' }), initial);
  });
};

const testPassThruAndInit = (reducer, initial, { operator = 'strictEqual' } = {}) => {
  it('pass-thru', () => {
    const state = {};
    assert[operator]l(reducer(state, { type: 'NO_ACTION' }), state);
  });

  it('initial value', () => {
    assert[operator](reducer(undefined, { type: 'NO_ACTION' }), initial);
  });
};

describe('combined auth reducer', () => {
  testPassThruAndInit(auth, 
    { token: null, user: null, error: null }, 
    { operator: 'deepEqual' });  
});

describe('user reducer', () => {

  testPassThru(user);
  tesInit(user, null);

  it('fetched', () => {
    const userState = { name: 'user' };
    assert.deepEqual(user(null, { 
      type: actions.FETCHED_USER,
      payload: userState 
    }), userState);
  });

  it('LOGOUT and AUTH_FAILED clears user', () => {
    assert.equal(user({}, { type: actions.LOGOUT }), null);
    assert.equal(user({}, { type: actions.AUTH_FAILED }), null);
  });

});

describe('token reducer', () => {
  
  testPassThruAndInit(token, null);
  
  it('GOT_TOKEN adds token', () => {
    const tokenState = {};
    assert.deepEqual(token(null, { 
      type: actions.GOT_TOKEN,
      payload: tokenState 
    }), tokenState);
  });

  it('LOGOUT and AUTH_FAILED clears token', () => {
    assert.equal(token({}, { type: actions.LOGOUT }), null);
    assert.equal(token({}, { type: actions.AUTH_FAILED }), null);
  });

});

describe('error reducer', () => {
  
  testPassThruAndInit(error, null);
  
  it('AUTH_FAILED adds error', () => {
    const errorState = {};
    assert.deepEqual(error(null, { 
      type: actions.AUTH_FAILED,
      payload: errorState 
    }), errorState);
  });

  it('LOGOUT and GOT_TOKEN and FETCHED_USER clears error', () => {
    assert.equal(error({}, { type: actions.LOGOUT }), null);
    assert.equal(error({}, { type: actions.GOT_TOKEN }), null);
    assert.equal(error({}, { type: actions.FETCHED_USER }), null);
  });

});
