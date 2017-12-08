import reducer, { PIRATE_ADD, PIRATE_REMOVE } from './reducer';
import { CREW_ADD, CREW_REMOVE } from '../crews/reducer';

describe('pirates reducer', () => {

  it('initializes', () => {
    const state = reducer(undefined, {});
    expect(state).toEqual({});
  });

  it('adds an entry for added crew', () => {
    const crew = { _id: 123, name: 'test crew' };
    const state = reducer({}, { type: CREW_ADD, payload: crew });
    expect(state).toEqual({
      '123': []
    });
  });

  it('removes an entry for removed crew', () => {
    const state = reducer(
      { '123': [], '456': [] }, 
      { type: CREW_REMOVE, payload: '123' }
    );
    expect(state).toEqual({
      '456': []
    });
  });

  it('adds a pirate', () => {
    const pirate = { name: 'test pirate' };
    const state = reducer(
      { '123': [] }, 
      { type: PIRATE_ADD, payload: { crewId: '123', pirate } }
    );
    expect(state).toEqual({
      '123': [pirate]
    });
  });

  it('removes a pirate', () => {
    const state = reducer(
      { '123': [{ _id: '456' }, { _id: '789' }]},
      { type: PIRATE_REMOVE, payload: { crewId: '123', _id: '456' } }
    );

    expect(state).toEqual({
      '123': [{ _id: '789' }]
    });
  });

});