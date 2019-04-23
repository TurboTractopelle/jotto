import { storeFactory } from "./testUtils";
import { guessWordStart } from "../store/actions/actions";

describe("guessWordStart action dispatch", () => {
  const secretWordReducer = "party";
  const unsuccessfull = "train";
  describe("no guessed words", () => {
    let store;
    let initialState = { secretWordReducer };
    beforeEach(() => (store = storeFactory(initialState)));
    it("updates the state for unsuccessful guess", () => {
      store.dispatch(guessWordStart(unsuccessfull));
      const expectedState = {
        ...initialState,
        successreducer: false,
        guessedWordReducer: [
          { guessedWord: unsuccessfull, letterMatchCount: 3 }
        ]
      };
      expect(store.getState()).toEqual(expectedState);
    });
    it("updates the state for successful guess", () => {
      store.dispatch(guessWordStart(secretWordReducer));
      const expectedState = {
        ...initialState,
        successreducer: true,
        guessedWordReducer: [
          { guessedWord: secretWordReducer, letterMatchCount: 5 }
        ]
      };
      expect(store.getState()).toEqual(expectedState);
    });
  });
  describe("guessed words", () => {
    let store;
    const guessedWordReducer = [{ guessedWord: "latin", letterMatchCount: 3 }];
    const initialState = { guessedWordReducer, secretWordReducer };
    beforeEach(() => (store = storeFactory(initialState)));
    it("updates the state for unsuccessful guess", () => {
      store.dispatch(guessWordStart(unsuccessfull));
      const expectedState = {
        ...initialState,
        successreducer: false,
        guessedWordReducer: [
          ...guessedWordReducer,
          { guessedWord: unsuccessfull, letterMatchCount: 3 }
        ]
      };
      expect(store.getState()).toEqual(expectedState);
    });
    it("updates the state for successful guess", () => {
      store.dispatch(guessWordStart(secretWordReducer));
      const expectedState = {
        ...initialState,
        successreducer: true,
        guessedWordReducer: [
          ...guessedWordReducer,
          { guessedWord: secretWordReducer, letterMatchCount: 5 }
        ]
      };
      expect(store.getState()).toEqual(expectedState);
    });
  });
});
