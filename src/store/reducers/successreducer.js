import * as actionTypes from "../actions/actionTypes";
const initialState = false;

const successreducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;

    default:
      return state;
  }
};

export default successreducer;
