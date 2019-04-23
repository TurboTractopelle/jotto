import moxios from "moxios";
import secretWord, { getSecretWord } from "./secretWord";
import { storeFactory } from "../../test/testUtils";

describe("secretWord", () => {
  let wrapper;

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
      expect(newState.secretWord).toBe(secretWord);
    });
  });
});
