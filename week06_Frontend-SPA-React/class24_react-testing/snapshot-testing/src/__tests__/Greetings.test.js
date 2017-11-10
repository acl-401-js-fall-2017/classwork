import React from 'react';
// "mount" does full render including children
// "shallow" does just the parent
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { Greeter, Greetings } from '../Greetings';

describe('Greeter', () => {

  it('says salutation to Mimi', () => {
    const wrapper = shallow(<Greeter salutation="Goodbye" name="Mimi"/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('says hello by default', () => {
    const wrapper = shallow(<Greeter name="Mimi" />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

});


describe('Greetings', () => {

  it('says hello to people', () => {
    const wrapper = shallow(
      <Greetings people={['Jill', 'Julie', 'Jonsie']} />
    );
    // should default to Hello
    expect(toJSON(wrapper)).toMatchSnapshot();
        
    // // direct call to component API:        
    // const component = wrapper.instance();
    // component.changeSalutation();
    // wrapper.update();

    // or simulate the event:
    const button = wrapper.find('button');
    button.simulate('click');
        
    // should switch to opposite "Goodbye"
    expect(toJSON(wrapper)).toMatchSnapshot();
        
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'foo' } });
        
    // should be 'foo', the value from the input change
    expect(toJSON(wrapper)).toMatchSnapshot();
        
    // should revert to "Hello"
    button.simulate('click');
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});    
