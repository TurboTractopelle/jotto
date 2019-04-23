import { combineReducers } from "redux";
import successreducer from "./successreducer";
import guessedWordReducer from "./guesswordreducer";
import secretWordReducer from "./secretWord";

const reducer = combineReducers({
  successreducer,
  guessedWordReducer,
  secretWordReducer
});

export default reducer;
