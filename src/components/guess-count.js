import React from 'react';
import {connect} from 'react-redux';

import './guess-count.css';

export function GuessCount(props) {
    const guessCount = props.guesses.length;
    const isPlural = guessCount !== 1;
    const guessNoun = isPlural ? 'guesses' : 'guess';

    return (
        <h2 id="guessCount">
            You've made <span id="count">{guessCount}</span> {guessNoun}!
        </h2>
    );
}

//const mapStateToProps = state => state;
export default connect(state=>state)(GuessCount);