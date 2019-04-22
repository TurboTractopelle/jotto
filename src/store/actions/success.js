import * as actionTypes from "./actionTypes";

const actionCreator = (type, ...autreArgs) => {
  return (...args) => {
    const action = { type };
    autreArgs.map((item, i) => (action[item] = args[i]));
    return action;
  };
};

export const success = actionCreator(actionTypes.CORRECT_GUESS);
