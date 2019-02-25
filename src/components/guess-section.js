import React from 'react';
import {connect} from 'react-redux';

import Feedback from './feedback';
import GuessForm from './guess-form';

export default function GuessSection(props) {
  // const { feedback, guesses } = props;
  // const guessCount = guesses.length;
  // console.log(1, feedback, guessCount)

  return (
    <section aria-label="Guess section" aria-describedby="feedback">
      <Feedback />
      <GuessForm />
    </section>
  );
/*
  return (
    <section aria-label="Guess section" aria-describedby="feedback">
      <Feedback feedback={feedback} guessCount={guessCount} />
      <GuessForm onMakeGuess={guess => props.onMakeGuess(guess)} />
    </section>
  );
*/
}


// const mapStateToProps = state => state;
// export default connect(mapStateToProps)(GuessSection);