import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadResponse } from './actions';

class Response extends PureComponent {

  componentDidMount() {
    this.props.loadResponse({ wait: 1500 });
  }

  render() {
    const { response } = this.props;

    return response
      ? <pre>{JSON.stringify(response, true, 2)}</pre>
      : <div>No response</div>;
  }
}

export default connect(
  state => ({ response: state.response }),
  { loadResponse }
)(Response);



