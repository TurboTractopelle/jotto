import { getLetterMatchCount } from "./helpers";

describe("getLetterMatchCount", () => {
  const secret = "party";
  it("returns 0 when no matchin", () => {
    expect(getLetterMatchCount("bones", secret)).toBe(0);
  });
  it("returns 3 with 3 matching", () => {
    expect(getLetterMatchCount("train", secret)).toBe(3);
  });
  it("returns the correct number when repeating letters", () => {
    expect(getLetterMatchCount("parka", secret)).toBe(3);
  });
});
