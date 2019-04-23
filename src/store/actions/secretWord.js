import axios from "axios";
import * as actions from "../actions/actions";

const actionCreator = (type, ...autreArgs) => {
  return (...args) => {
    const action = { type };
    autreArgs.map((item, i) => (action[item] = args[i]));
    return action;
  };
};

export const getSecretWord = () => {
  return dispatch => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1");
  };
};
