import React from 'react';
import { shallow } from 'enzyme';
import GuessList from './guess-list';

describe('<GuessList />', ()=>{
  it('Renders without crashing', ()=>{
    shallow(<GuessList guesses={[]} />);

  });

  it('Renders list', ()=>{
    const guesses = [ 1, 2, 3, 4];
    const wrapper = shallow(<GuessList guesses={guesses} />);
    expect(wrapper.find('li').length).toEqual(guesses.length);
    expect(wrapper.find('li').at(0).text()).toEqual(guesses[0].toString());

  });
});

