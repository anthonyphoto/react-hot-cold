
import {
    MAKE_GUESS, 
    makeGuess, 
    GENERATE_AURAL_UPDATE, 
    generateAuralUpdate, 
    RESTART_GAME, 
    restartGame
} from './index';

describe('Make guess', ()=>{
    it("It should return the action", ()=>{
        const guess = 50;
        const action = makeGuess(guess);
        expect(action.type).toEqual(MAKE_GUESS);
        expect(action.input).toEqual(guess);
    });
});

describe('Restart Game', ()=>{
    it("It should return the action", ()=>{
        const action = restartGame();
        expect(action.type).toEqual(RESTART_GAME);
    });
});

describe('Generate Aural Update', ()=>{
    it("It should return the action", ()=>{
        const action = generateAuralUpdate();
        expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
    });
});