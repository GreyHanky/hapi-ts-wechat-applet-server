import * as Hapi from "hapi";
import axios from "axios";

export default class TestRequest {
  public async request(request:Hapi.Request, h: Hapi.ResponseToolkit) {
    return { code: "testfdd" };
  }
}
