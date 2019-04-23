import * as actionTypes from "../actions/actionTypes";

const initialState = [];

const guessedWordReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GUESS_WORD:
      return state;

    default:
      return state;
  }
};

export default guessedWordReducer;
