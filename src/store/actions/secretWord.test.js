import moxios from "moxios";
import { getSecretWord } from "./secretWord";
import { storeFactory } from "../../test/testUtils";

describe("secretWord", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("gets a word from the server", () => {
    const secretWord = "party";
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: secretWord });
    });
    return store.dispatch(getSecretWord()).then(() => {
      const newState = store.getState();
      expect(newState.secretWordReducer).toBe(secretWord);
    });
  });
});
