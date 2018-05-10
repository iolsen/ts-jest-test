import * as testModule from "./module";

export default class Test {
  public async doStuff() {
    await testModule.request("this", null, "throws");
  }
}
