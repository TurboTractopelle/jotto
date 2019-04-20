import React from "react";
import Congrats from "./Congrats";
import { shallow } from "enzyme";

describe("<Congrats />", () => {
  const setup = props => shallow(<Congrats {...props} />);
  const findByProp = (wrapper, prop) => wrapper.find(`[dataTest="${prop}"]`);

  it("loads <Congrats />", () => {
    const wrapper = setup();
    expect(wrapper.find("div.Congrats")).toBeTruthy();
  });
});
