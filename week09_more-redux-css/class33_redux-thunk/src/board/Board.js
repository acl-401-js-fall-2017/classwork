import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { takeTurn } from './actions';

class Board extends PureComponent {

  render() {
    const { board, takeTurnTheProp } = this.props;
    
    return (
      <ul>
        {board.map((square, i) => (
          <li key={i} onClick={() => takeTurnTheProp(i)}>{square}</li>
        ))}
      </ul>
    );
  }
}

export default connect(
  state => ({ board: state.board }),
  dispatch => {
    return bindActionCreators({ 
      takeTurnTheProp: takeTurn
    }, dispatch);
  }
)(Board);

