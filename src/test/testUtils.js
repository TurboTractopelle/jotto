import reducer from "../store/reducers/reducer";
import { createStore } from "redux";

export const findByProp = (wrapper, prop) =>
  wrapper.find(`[dataTest="${prop}"]`);

// storeFactory
export const storeFactory = initialState => {
  return createStore(reducer, initialState);
};
