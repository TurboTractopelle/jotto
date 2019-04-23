import { getLetterMatchCount } from "../../helpers/helpers";
import * as actionTypes from "../actions/actionTypes";
import * as actions from "../actions/actions";

const actionCreator = (type, ...autreArgs) => {
  return (...args) => {
    const action = { type };
    autreArgs.map((item, i) => (action[item] = args[i]));
    return action;
  };
};

export const guessWordTest = actionCreator(
  actionTypes.GUESS_WORD_TEST,
  "guessedWord",
  "letterMatchCount"
);

export const guessWordStart = guessedWord => {
  return (dispatch, getState) => {
    const counter = getLetterMatchCount(
      guessedWord,
      getState().secretWordReducer
    );
    dispatch(guessWordTest(guessedWord, counter));
    if (counter === 5) {
      dispatch(actions.success());
    }
  };
};
