import React from 'react';
import { shallow, mount } from 'enzyme';
import GuessForm from './guess-form';

describe ('Guess Form Test', ()=>{
  it('Renders without crashing', ()=>{
    shallow(<GuessForm />);
  });

  it('Makes callback upon submission', ()=> {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onMakeGuess={callback} />);

    wrapper.find('input[type="number"]').instance().value = "50";
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith("50");
  });

  it('Reset the form after submission', ()=>{
    const wrapper = mount(<GuessForm />);
    wrapper.find('input[type="number"]').instance().value = "50";
    wrapper.simulate('submit');
    expect(wrapper.find('input[type="number"]').instance().value).toEqual('');
  });
});