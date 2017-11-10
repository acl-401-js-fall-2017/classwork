import React, { Component } from 'react';

const pets = {
  paula: 'cat',
  joe: 'dog',
  bruce: 'lizard',
  suzy: 'bird'
};

function fauxFetch(name) {
  return Promise.resolve(pets[name]);
}

function WhoDis({ name }) {
  return <div>who is {name}?</div>;
} 

export default class PetType extends Component {
  constructor() {
    super();
    this.state = {
      pet: ''
    };
  }

  componentDidMount() {
    this.fetchPet(this.props.name);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.name === this.props.name) return;
    this.fetchPet(nextProps.name);
  }
  
  fetchPet(name) {
    fauxFetch(name)
      .then(pet => this.setState({ pet }));
  }

  render () {
    const { pet } = this.state;
    if(!pet) return <WhoDis name={this.props.name}/>;

    return (
      <div>{this.props.name} would like a {this.state.pet}</div>
    );
  }
}