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
    const wrapper = shallow(<Input store={store} />)
      .dive()
      .dive();
    console.log(wrapper.debug());
  };

  setup();

  describe("word has not been guessed", () => {
    it("renders", () => {});
    it("renders input button", () => {});
    it("renders submit button", () => {});
  });

  describe("word has been guessed", () => {
    it("doesnt render", () => {});
  });
  it("doesnt render input button", () => {});
  it("doesnt render submit button", () => {});
});
