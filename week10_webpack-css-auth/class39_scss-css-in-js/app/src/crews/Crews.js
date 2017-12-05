import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Pirates from '../pirates/Pirates';
import AddItem from '../common/AddItem';
import { addCrew, loadCrews, removeCrew } from './actions';

class Crews extends PureComponent {

  componentDidMount() {
    this.props.loadCrews();
  }

  render() {
    const { crews, addCrew, removeCrew } = this.props;
    return (
      <section>
        <AddItem type="crew" onAdd={addCrew}/>
        <ul>
          {crews.map(crew => (
            <li key={crew._id}>
              <h2>
                {crew.name}
                <button onClick={() => removeCrew(crew._id)}>X</button>
              </h2>
              <Pirates crewId={crew._id}/>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default connect(
  state => ({ 
    crews: state.crews,
    error: state.crewsError
  }),
  { addCrew, loadCrews, removeCrew }
)(Crews);