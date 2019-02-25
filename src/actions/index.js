export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = input => ({
    type: MAKE_GUESS,
    input
});

export const GENERATE_AURAL_UPDATE = 'GENERATE_AURAL_UPDATE'
export const generateAuralUpdate = _ => ({
    type: GENERATE_AURAL_UPDATE
});

export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = _=>({
    type: RESTART_GAME
});