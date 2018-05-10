import Test from "../index";

describe("sourcemap", () => {
  it("throws with bad line number", async () => {
    let test = new Test();
    await test.doStuff();
  });
});
