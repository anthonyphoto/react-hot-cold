import React from 'react';
import { shallow } from 'enzyme';
import GuessCount from './guess-count';

describe ('<GuessCount />', () => {
    it('Render without crashing', ()=>{
        shallow(<GuessCount />);
    });

    it('Renders the right count', ()=>{
        const wrapper = shallow(<GuessCount guessCount={5} />);
        expect(wrapper.text()).toEqual(`You've made 5 guesses!`);
    });

});