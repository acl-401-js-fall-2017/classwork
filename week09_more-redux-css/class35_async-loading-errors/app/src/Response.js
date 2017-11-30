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
        <button onClick={() => loadResponse({ wait: 1500 })}>
          Load with Wait
        </button>
        <button onClick={() => loadResponse({ unexpected: true })}>
          Load with Unexpected Error
        </button>

        <form onSubmit={async event => {
          event.preventDefault();
          const form = event.target;
          try {
            // eslint-disable-next-line
            const options = form.elements.answer.value == 42 ? null : { validation: 'you did not do that right' };
            await loadResponse(options);
            form.reset();
          }
          catch(err) {
            // no-op
          }
        }}>
          <input name="answer"/>
          <button type="submit">
            Load with Validation Error Unless 42
          </button>
        </form>
        {showResponse}
      </div>
    );
  }
}

export default connect(
  state => ({ response: state.response }),
  { loadResponse }
)(Response);



