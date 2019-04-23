import reducer from "../store/reducers/reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const findByProp = (wrapper, prop) =>
  wrapper.find(`[data-test="${prop}"]`);

// storeFactory
export const storeFactory = initialState => {
  return createStore(reducer, initialState, applyMiddleware(thunk));
};
