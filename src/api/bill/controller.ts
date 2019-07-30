import * as Hapi from "hapi";
// import axios from "axios";

export default class Consumer {
  public async request(request: Hapi.Request, h: Hapi.ResponseToolkit) {
    return { code: "testfdd" };
  }

  public async add() {

  }

}
