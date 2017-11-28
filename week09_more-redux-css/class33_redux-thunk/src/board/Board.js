import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { takeTurn } from './actions';

class Board extends PureComponent {

  handleClick = index => {
    const someReturn = this.props.takeTurn(index);
    console.log(someReturn);
  }

  render() {
    const { board, takeTurn } = this.props;
    
    return (
      <ul>
        {board.map((square, i) => (
          <li key={i} onClick={() => this.handleClick(i)}>{square}</li>
        ))}
      </ul>
    );
  }
}

export default connect(
  state => ({ board: state.board }),
  { takeTurn }
)(Board);

// full control of dispatch (make own object)
// dispatch => ({
//   takeTurnTheProp(index) {
//     dispatch(takeTurn(index));
//   }
// })

// use bind action creators:
// dispatch => {
//   return bindActionCreators({
//    takeTurnTheProp: takeTurn
//   }, dispatch);
// }

// use the object literal shorthand:
// { takeTurnTheProp: takeTurn }
