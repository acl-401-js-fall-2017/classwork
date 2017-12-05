import reducer, { CREW_ADD, CREW_REMOVE, CREW_UPDATE } from './reducer';

describe('crews reducer', () => {

  it('initializes', () => {
    const state = reducer(undefined, {});
    expect(state).toEqual([]);
  });

  it('adds a crew', () => {
    const crew = { name: 'test crew' };
    const state = reducer([], { type: CREW_ADD, payload: crew });
    expect(state).toEqual([crew]);
  });

  it('removes a crew', () => {
    const crew = { _id: 123, name: 'test crew' };
    const state = reducer([crew], { type: CREW_REMOVE, payload: crew._id });
    expect(state).toEqual([]);
  });

  it('updates a crew', () => {
    const crew = { _id: 123, name: 'test crew', color: 'black' };
    const state = reducer([crew], { 
      type: CREW_UPDATE, 
      payload: { _id: 123, name: 'new name' } 
    });
    expect(state).toEqual([
      { ...crew, name: 'new name' }
    ]);
  });
});