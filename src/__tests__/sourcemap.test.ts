import Test from "../index";

describe("sourcemap", () => {
  it("throws with bad line number", () => {
    let test = new Test();
    test.doStuff();
  });
});
