import React from "react";
import Congrats from "./Congrats";
import { shallow } from "enzyme";
import { findByProp } from "../../../test/testUtils";

const defaultProps = { success: false };

describe("<Congrats />", () => {
  const setupProps = props => ({ ...defaultProps, ...props });
  const setup = props => shallow(<Congrats {...setupProps(props)} />);

  it("loads <Congrats />", () => {
    const wrapper = setup();
    expect(wrapper.find("div.Congrats")).toBeTruthy();
  });

  it("displays no text when props.success is false", () => {
    const wrapper = setup({ success: false });
    expect(findByProp(wrapper, "component-congrats").text()).toBe("");
  });

  it("displays the congrats message when props.success is true", () => {
    const wrapper = setup({ success: true });
    expect(findByProp(wrapper, "component-congrats").text()).toBe("GG");
  });
});
