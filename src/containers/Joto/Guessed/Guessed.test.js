import React from "react";
import Guessed from "./Guessed";
import { shallow } from "enzyme";
import { findByProp } from "../../../test/testUtils";

const defaultProps = [];

const setupProps = props => ({ ...defaultProps, ...props });
const setup = props => shallow(<Guessed {...setupProps(props)} />);

describe("<Guessed /> with no guessed", () => {
  it("loads <Guessed/>", () => {
    const wrapper = setup();
    expect(findByProp(wrapper, "component-guessed")).toBeTruthy();
  });

  it("displays a message to input stuff", () => {
    const wrapper = setup();
    expect(findByProp(wrapp));
  });
});
