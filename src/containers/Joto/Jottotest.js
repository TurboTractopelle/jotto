import React from "react";
import Jotto from "./Jotto";
import { shallow } from "enzyme";

describe("<Jotto />", () => {
  const setup = props => shallow(<Jotto {...props} />);
  const findByProp = (wrapper, prop) => wrapper.find(`[dataTest="${prop}"]`);

  it("loads <Jotto />", () => {
    const wrapper = setup();
    expect(wrapper.find("div.Jotto")).toBeTruthy();
  });
});
