import React from "react";
import Jotto from "./Jotto";
import { JottoUnconnected } from "./Jotto";
import { shallow } from "enzyme";
import { findByProp, storeFactory } from "../../test/testUtils";

describe("<Jotto />", () => {
  let wrapper;

  const setup = (initialState = {}) => {
    let store = storeFactory(initialState);
    return shallow(<Jotto store={store} />)
      .dive()
      .dive();
  };

  describe("on start", () => {
    beforeEach(() => (wrapper = setup()));

    it("loads <Jotto />", () => {
      expect(findByProp(wrapper, "component-jotto")).toBeTruthy();
    });

    it("gets success from store, false at start", () => {
      const success = wrapper.instance().props.success;
      expect(success).toBeFalsy();
    });

    it("gets guessedwords from store, empty at start", () => {
      const guessedwords = wrapper.instance().props.guessedwords;
      expect(guessedwords).toEqual([]);
    });
  });

  describe("on changes", () => {
    const successreducer = true;
    const guessedWordReducer = [{ guessedWord: "latin", letterMatchCount: 0 }];
    const initialState = {
      successreducer,
      guessedWordReducer
    };
    const setup = initialState => {
      const store = storeFactory(initialState);
      return shallow(<Jotto store={store} />)
        .dive()
        .dive();
    };
    let wrapper;
    beforeEach(() => (wrapper = setup(initialState)));

    it("get a modified success", () => {
      expect(wrapper.instance().props.success).toBeTruthy();
    });

    it("gets an array on words from the store", () => {
      expect(wrapper.instance().props.guessedwords).toEqual(guessedWordReducer);
    });
  });
});

describe("JottoUnconnected tests componentDidMount", () => {
  const getSecretMock = jest.fn();
  // creer le wrapper en passant directment la méthode qui normalement vient de connect
  const wrapper = shallow(<JottoUnconnected setSecretWord={getSecretMock} />);

  // on lancer le lifeCycle
  wrapper.instance().componentDidMount();
  const mockCalled = getSecretMock.mock.calls.length;
  expect(mockCalled).toBe(1);
});
