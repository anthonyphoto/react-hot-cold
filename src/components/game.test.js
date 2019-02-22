import React from 'react';
import {shallow} from 'enzyme';

import Game from './game';

describe('<Game/>', ()=> {

  it('Renders without crashing', ()=> {
    shallow(<Game />);
  });

  it('Restarts a game', ()=>{
    const wrapper = shallow(<Game />);
    wrapper.setState({
      guesses: [ 1,2,3,4],
      feedback: 'HOT',
      correctAnswer: 10
    });
    wrapper.instance().restartGame();
    expect(wrapper.state('guesses')).toEqual([]);
    expect(wrapper.state('feedback')).toEqual('Make your guess!');
    expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(1);
    expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
  });


  it('Makes guesses', ()=>{
    const wrapper = shallow(<Game />);
    wrapper.setState({ correctAnswer: 50 });
    wrapper.instance().makeGuess(50);
    expect(wrapper.state('guesses')).toEqual([50]);
    expect(wrapper.state('feedback')).toEqual('You got it!');

    wrapper.instance().makeGuess(100);
    expect(wrapper.state('guesses')).toEqual([50, 100]);
    expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');

    wrapper.instance().makeGuess(20);
    expect(wrapper.state('guesses')).toEqual([50, 100, 20]);
    expect(wrapper.state('feedback')).toEqual('You\'re Cold...');

    wrapper.instance().makeGuess(40);
    expect(wrapper.state('guesses')).toEqual([50, 100, 20, 40]);
    expect(wrapper.state('feedback')).toEqual('You\'re Warm.');

    wrapper.instance().makeGuess(51);
    expect(wrapper.state('guesses')).toEqual([50, 100, 20, 40, 51]);
    expect(wrapper.state('feedback')).toEqual('You\'re Hot!');
  });
   

});
