import successreducer from "./successreducer";
import * as actionTypes from "../actions/actionTypes";

describe("successreducer", () => {
  it("returns false by default", () => {
    expect(successreducer(undefined, {})).toBeFalsy();
  });

  it("returns true if correction action", () => {
    expect(
      successreducer({}, { type: actionTypes.CORRECT_GUESS })
    ).toBeTruthy();
  });
});
