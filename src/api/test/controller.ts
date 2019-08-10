import * as Hapi from "hapi";
import { generateToken } from '../wxLogin/controller.helper';


export default class TestRequest {
  public async request(request:Hapi.Request, h: Hapi.ResponseToolkit) {
    return { code: generateToken(1) };
  }
}
