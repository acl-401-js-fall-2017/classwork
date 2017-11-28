import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Pirates from '../pirates/Pirates';
import AddItem from '../AddItem';
import { addCrew } from './actions';

class Crews extends PureComponent {
  // TODO: replace with server call...
  componentDidMount() {
    this.props.addCrew({ name: 'straw hats' });
  }

  render() {
    const { crews, addCrew } = this.props;
    return (
      <section>
        <AddItem type="crew" onAdd={addCrew}/>
        <ul>
          {crews.map(crew => (
            <li key={crew._id}>
              <h2>{crew.name}</h2>
              <Pirates crewId={crew._id}/>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default connect(
  state => ({ crews: state.crews }),
  { addCrew }
)(Crews);