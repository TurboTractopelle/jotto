import * as actionTypes from "../actions/actionTypes";
const initialState = "party";

const secretWordReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SECRET_WORD:
      return action.word;
    default:
      return state;
  }
};

export default secretWordReducer;
