import {gameReducer} from './index';
import * as actions from '../actions';
import { generateAuralUpdate } from '../../../redux-hot-cold-tested/src/actions';

describe('Reducer', ()=>{
    it('Should initialize correctly', ()=>{
        const state = gameReducer(undefined, {type: '__UNKNOWN'});
        expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.auralStatus).toEqual('');
        expect(state.correctAnswer).toBeLessThanOrEqual(100);
        expect(state.correctAnswer).toBeGreaterThanOrEqual(1);
    });

    it('Should return current state if action type is unknown', ()=>{
        const state = {};
        const returnedState = gameReducer(state, { type: '__UNKNOWN'});
        expect(returnedState).toBe(state);      // toEqual works the same
    });

    describe('Restart Game', ()=>{
        it('Should initilize the state', ()=>{

            const state = gameReducer({}, actions.restartGame());  // {} could be any random state
            expect(state.guesses).toEqual([]);
            expect(state.feedback).toEqual('Make your guess!');
            expect(state.auralStatus).toEqual('');
            expect(state.correctAnswer).toBeLessThanOrEqual(100);
            expect(state.correctAnswer).toBeGreaterThanOrEqual(1);
        })
    });
    
    describe('Make a guess', ()=>{
        it('Should process a guess', ()=>{
            let state = {
                guesses: [],
                feedback: '',
                auralStatus: '',
                correctAnswer: 50
            }
            state = gameReducer(state, actions.makeGuess(50));
            expect(state.guesses).toEqual([50]);
            expect(state.feedback).toEqual('You got it!');
        
            state = gameReducer(state, actions.makeGuess(100));
            expect(state.guesses).toEqual([50, 100]);
            expect(state.feedback).toEqual('You\'re Ice Cold...');

            state = gameReducer(state, actions.makeGuess(20));
            expect(state.guesses).toEqual([50, 100, 20]);
            expect(state.feedback).toEqual('You\'re Cold...');
        
            state = gameReducer(state, actions.makeGuess(40));
            expect(state.guesses).toEqual([50, 100, 20, 40]);
            expect(state.feedback).toEqual('You\'re Warm.');

            state = gameReducer(state, actions.makeGuess(51));
            expect(state.guesses).toEqual([50, 100, 20, 40, 51]);
            expect(state.feedback).toEqual('You\'re Hot!');
        });
    });

    describe('Aural Update', ()=>{
        it('Should update aural message', ()=>{
            let state = {
                guesses: [25, 3, 90],
                feedback: "You're Warm.",
                auralStatus: ''
            }
            state = gameReducer(state, generateAuralUpdate());
            expect(state.auralStatus).toEqual("Here's the status of the game right now: You're Warm. You've made 3 guesses. In order of most- to least-recent, they are: 90, 3, 25");
        });
    });
});