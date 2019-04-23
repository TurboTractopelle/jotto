import axios from "axios";
import * as actionTypes from "../actions/actionTypes";

const actionCreator = (type, ...autreArgs) => {
  return (...args) => {
    const action = { type };
    autreArgs.map((item, i) => (action[item] = args[i]));
    return action;
  };
};

const setSecretWord = actionCreator(actionTypes.SET_SECRET_WORD, "word");

export const getSecretWord = () => {
  return dispatch =>
    axios.get("https://jsonplaceholder.typicode.com/posts/1").then(res => {
      dispatch(setSecretWord(res.data));
    });
};
