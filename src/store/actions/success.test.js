import { success } from "./success";

describe("success action", () => {
  it("returns an action type CORRECT_GUESS", () => {
    const successAction = success();
    expect(successAction).toEqual({ type: "CORRECT_GUESS" });
  });
});
