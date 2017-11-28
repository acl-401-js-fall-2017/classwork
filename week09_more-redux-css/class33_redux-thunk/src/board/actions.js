
export function takeTurn(index) {
  return (dispatch, getState) => {

    const { turn } = getState();
    const play = turn === 'PlayerX' ? 'X' : 'O';

    dispatch({ 
      type: 'TAKE_TURN', 
      payload: { 
        index, 
        play
      } 
    });

    // this is ***AFTER*** the dispatch,
    // so is the "new" state;
    const { board } = getState();

    if(gameWon()) {
      dispatch({
        type: 'WIN_GAME',
        payload: turn
      });
    }

    if(board.filter(b => b !== '<>').length === 9) {
      dispatch({
        type: 'TIE_GAME'
      });
    }

    return 42;
  };
}

const gameWon = () => false;