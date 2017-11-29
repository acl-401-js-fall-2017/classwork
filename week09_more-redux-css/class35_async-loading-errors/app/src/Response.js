import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Response extends PureComponent {
  render() {
    const { response } = this.props;

    return response
      ? <pre>{JSON.stringify(response, true, 2)}</pre>
      : <div>No response</div>;
  }
}

export default connect(
  state => ({ response: state.response }),
  null
)(Response);



