import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadResponse } from './actions';

class Response extends PureComponent {

  render() {
    const { response, loadResponse } = this.props;

    const showResponse = response
      ? <pre>{JSON.stringify(response, true, 2)}</pre>
      : <div>No response</div>;

    return (
      <div>
        <button onClick={() => loadResponse({ wait: 1500 })}>Load with Wait</button>
        {showResponse}
      </div>
    );
  }
}

export default connect(
  state => ({ response: state.response }),
  { loadResponse }
)(Response);



