import React from "react";
import Counter from "./Counter";
import { shallow } from "enzyme";

describe("<Counter />", () => {
  const setup = props => shallow(<Counter {...props} />);
  const findByProp = (wrapper, prop) => wrapper.find(`[testData="${prop}"]`);

  it("loads the comp", () => {
    const wrapper = setup();
    expect(wrapper.find(".Counter")).toBeTruthy();
  });

  it("loads the passed title", () => {
    const wrapper = setup({ title: "my title" });
    expect(wrapper.find("h1").text()).toBe("my title");
  });

  it("displays 0 at start", () => {
    expect(findByProp(setup(), "counter").text()).toBe("0");
  });

  it("increment 0->1 on click", () => {
    const wrapper = setup();
    findByProp(wrapper, "increment").simulate("click");
    expect(findByProp(wrapper, "counter").text()).toBe("1");
  });

  it("increment on click, random input 0 - 9", () => {
    const nb = Math.floor(Math.random() * 9);
    const wrapper = setup();
    wrapper.setState({ counter: nb });
    expect(findByProp(wrapper, "counter").text()).toBe(nb.toString());
    findByProp(wrapper, "increment").simulate("click");
    expect(findByProp(wrapper, "counter").text()).toBe((nb + 1).toString());
  });
});
