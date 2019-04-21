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

describe("<Guessed /> with guessed", () => {
  let wrapper;
  beforeEach(
    () =>
      (wrapper = setup({
        guessedwords: [
          { guessed: "chapi", letters: 3 },
          { guessed: "chapo", letters: 3 }
        ]
      }))
  );
  it("loads <Guessed/>", () => {
    expect(findByProp(wrapper, "component-guessed")).toBeTruthy();
  });

  it("displays a table", () => {
    expect(findByProp(wrapper, "guessed-words")).toBeTruthy();
  });

  it("displays the correct number of guessed words", () => {
    expect(findByProp(wrapper, "guessed-word").length).toBe(2);
  });
});
