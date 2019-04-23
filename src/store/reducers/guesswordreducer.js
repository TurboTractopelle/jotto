import * as actionTypes from "../actions/actionTypes";

const initialState = [];

const guessedWordReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GUESS_WORD_TEST:
      return [
        ...state,
        {
          guessedWord: action.guessedWord,
          letterMatchCount: action.letterMatchCount
        }
      ];

    default:
      return state;
  }
};

export default guessedWordReducer;
