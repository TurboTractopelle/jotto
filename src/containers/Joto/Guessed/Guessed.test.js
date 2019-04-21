import React from "react";
import Guessed from "./Guessed";
import { shallow } from "enzyme";
import { findByProp } from "../../../test/testUtils";

const defaultProps = [];

const setupProps = props => ({ ...defaultProps, ...props });
const setup = props => shallow(<Guessed {...setupProps(props)} />);

describe("<Guessed /> with no guessed", () => {
  let wrapper;
  beforeEach(() => (wrapper = setup({ guessedwords: [] })));
  it("loads <Guessed/>", () => {
    expect(findByProp(wrapper, "component-guessed")).toBeTruthy();
  });

  it("displays a message to input stuff", () => {
    expect(findByProp(wrapper, "component-guessed").text()).toBe("input stuff");
  });
});
