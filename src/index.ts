import { request } from "./module";

export default class Test {
  public doStuff() {
    request("this", null, "throws");
  }
}
