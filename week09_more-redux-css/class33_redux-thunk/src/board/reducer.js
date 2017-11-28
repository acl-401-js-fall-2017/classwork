// this is example of one big root reducer:
/*
const initialState = () => ({
  board: ['', '', '', '', '', '', '', '', ''],
  turn: 'PlayerX',
  finished: false
});

export function root(state = initialState(), { type, payload }) {
  switch(type) {
    case 'TAKE_TURN': {

      return {
        ...state,
        turn: state.turn === 'PlayerX' ? 'PlayerY' : 'PlayerX',
        board: [] //make new board
      };
    }
    default:
      return state;
  }
}
*/

const getEmptyBoard = () => [
  '<>', '<>', '<>', 
  '<>', '<>', '<>', 
  '<>', '<>', '<>'
];

export function board(state = getEmptyBoard(), { type, payload }) {
  switch(type) {
    case 'TAKE_TURN': {
      // index is which square
      // play is 'X' or 'O'
      const { index, play } = payload;
      return state.map((square, i) => i === index ? play : square);
    }
    default:
      return state;
  }
}

export function turn(state = 'PlayerX', { type, payload }) {
  switch(type) {
    case 'TAKE_TURN': {
      return state === 'PlayerX' ? 'PlayerY' : 'PlayerX';
    }
    default:
      return state;
  }
}

export function finished(state = false, { type, payload }) {
  switch(type) {
    case 'WIN_GAME': 
    case 'TIE_GAME': 
      return true;
    default:
      return state;
  }
}