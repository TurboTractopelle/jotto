import { combineReducers } from "redux";
import successreducer from "./successreducer";

const reducer = combineReducers({ successreducer, guessedWordReducer });

export default reducer;
