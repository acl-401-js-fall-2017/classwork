
export function takeTurn(index) {
  return { 
    type: 'TAKE_TURN', 
    payload: { 
      index, 
      play: 'X' } 
  };
}