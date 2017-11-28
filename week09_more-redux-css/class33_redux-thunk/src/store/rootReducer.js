import { combineReducers } from 'redux';
import { board, turn, finished } from '../board/reducer';

const rootReducer = combineReducers({
  board,
  turn,
  finished
});

export default rootReducer;
