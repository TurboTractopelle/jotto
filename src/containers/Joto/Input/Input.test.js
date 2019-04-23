import React from "react";
import Input from "./Input";
import { shallow } from "enzyme";
import { findByProp, storeFactory } from "../../../test/testUtils";

describe("render", () => {
  /*const defaultProps = [];
  const setupProps = props => ({ ...defaultProps, ...props });
  const setup = props => shallow(<Input {...setupProps(props)} />);*/

  const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    return shallow(<Input store={store} />)
      .dive()
      .dive();
  };

  describe("word has not been guessed", () => {
    let wrapper;
    beforeEach(() => (wrapper = setup({ successreducer: false })));
    it("renders", () => {
      expect(findByProp(wrapper, "component-input")).toBeTruthy();
    });
    it("renders input button", () => {
      expect(findByProp(wrapper, "input")).toBeTruthy();
    });
    it("renders submit button", () => {
      expect(findByProp(wrapper, "button")).toBeTruthy();
    });
  });

  describe("word has been guessed", () => {
    let wrapper;
    beforeEach(() => (wrapper = setup({ successreducer: true })));
    it("renders", () => {
      expect(findByProp(wrapper, "component-input")).toBeTruthy();
    });
    it("doesnt render the form", () => {
      expect(findByProp(wrapper, "form").length).toBe(0);
    });
  });
});
