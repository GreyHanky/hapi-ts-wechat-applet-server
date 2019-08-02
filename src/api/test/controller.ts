import * as Hapi from "hapi";
import axios from "axios";
import { BillTypes } from '../../helper/constants';


export default class TestRequest {
  public async request(request:Hapi.Request, h: Hapi.ResponseToolkit) {
    return { code: Object.keys(BillTypes) };
  }
}
