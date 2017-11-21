import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class PirateForm extends PureComponent {

  static propTypes = {
    pirate: PropTypes.object,
    onComplete: PropTypes.func.isRequired
  }

  static defaultProps = {
    text: 'Add'
  }

  constructor(props) {
    super(props);
    const { pirate = {} } = props;
    this.state = {
      name: pirate.name || null,
      role: pirate.role || null,
      _id: pirate._id || null,
      timestamp: pirate.timestamp
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { _id, timestamp, name, role } = this.state;
    this.props.onComplete({ _id, timestamp, name, role });
  }

  handleChange = ({ target: input }) => {
    this.setState({
      [input.name]: input.value
    });
  }

  // handleReset = () => {
  //   const { pirate = {} } = this.props;    
  //   this.setState({
  //     name: pirate.name || null,
  //     role: pirate.role || null,
  //     _id: pirate._id || null,
  //     timestamp: pirate.timestamp
  //   });
  // }

  render() {
    const { name, role } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          Name: <input name="name" value={name} onChange={this.handleChange}/>
        </div>
        <div>
          Role: <input name="role" value={role} onChange={this.handleChange}/>
        </div>
        <button type="submit">{this.props.text}</button>
        {/* <button onClick={this.handleReset}>Reset</button> */}
      </form>
    );
  }
}