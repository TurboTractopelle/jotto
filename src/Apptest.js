import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("<App />", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<App />)));
  it("loads", () => {
    expect(
      wrapper
        .find("div")
        .at(0)
        .hasClass("App")
    ).toBeTruthy();
  });
});
