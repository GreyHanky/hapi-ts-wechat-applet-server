import * as Hapi from "hapi";
import axios from "axios";

export default class TestRequest {
  public async request(request, h: Hapi.ResponseToolkit) {
    return { code: "testf" };
  }
}
