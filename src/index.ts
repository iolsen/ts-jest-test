import { request } from "./module";

export default class Test {
  public async doStuff() {
    await request("this", null, "throws");
  }
}
