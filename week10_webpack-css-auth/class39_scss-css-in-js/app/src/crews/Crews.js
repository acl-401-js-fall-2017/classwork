import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Pirates from '../pirates/Pirates';
import AddItem from '../common/AddItem';
import { addCrew, loadCrews, removeCrew } from './actions';
import styles from './Crews.css';
import styled from 'styled-components';

class Crews extends PureComponent {

  state = {
    radiusify: true
  };

  componentDidMount() {
    this.props.loadCrews();
  }

  render() {
    const { crews, addCrew, removeCrew } = this.props;
    return (
      <section className={styles.crews}>
        <button onClick={() => this.setState({ radiusify: false })}>turn off radius</button>
        <AddItem type="crew" onAdd={addCrew}/>
        <ul>
          {crews.map(crew => (
            <CrewItem key={crew._id}>
              <h2>
                {crew.name}
                <RemoveButton radiusify={this.state.radiusify} dimension={15} pirate={true} onClick={() => removeCrew(crew._id)}>X</RemoveButton>
              </h2>
              <Pirates crewId={crew._id}/>
            </CrewItem>
          ))}
        </ul>
      </section>
    );
  }
}

const CrewItem = styled.li`
  list-style: disc;

  > h2 {
    border: 1px solid green;
  }
`;


const RemoveButton = styled.button`
  background: ${props => props.pirate ? 'black' : 'white'};
  color: white;
  ${props => props.radiusify && 'border-radius: 20px'};
  height: ${props => props.dimension || 20}px;
  width: ${props => props.dimension || 20}px;
`;


export default connect(
  state => ({ 
    crews: state.crews,
    error: state.crewsError
  }),
  { addCrew, loadCrews, removeCrew }
)(Crews);