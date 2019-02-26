import React from 'react';
import { shallow, mount } from 'enzyme';
import {GuessForm} from './guess-form';
import {makeGuess} from '../actions'

describe ('Guess Form Test', ()=>{
  it('Renders without crashing', ()=>{
    shallow(<GuessForm />);
  });

  it('Should dispatch upon submission', ()=> {
    const dispatch = jest.fn();
    const wrapper = mount(<GuessForm dispatch={dispatch} />);

    wrapper.find('input[type="number"]').instance().value = 50;
    wrapper.simulate('submit');
    expect(dispatch).toHaveBeenCalledWith(makeGuess(50));
  });

  it('Reset the form after submission', ()=>{
    const wrapper = mount(<GuessForm dispatch={()=>{}} />);
    wrapper.find('input[type="number"]').instance().value = "50";
    wrapper.simulate('submit');
    expect(wrapper.find('input[type="number"]').instance().value).toEqual('');
  });
});