import * as Hapi from "hapi";
import { BillTypes } from "../../helper/constants";
import { EnumHelpers } from "../../utils";

export default class Controller {
  // 获取账单消费类型
  public async getBillTypes(request: Hapi.Request, h: Hapi.ResponseToolkit) {
    return { data: EnumHelpers.getKeyAndValues(BillTypes) };
  }

  public async add(request: Hapi.Request, h: Hapi.ResponseToolkit) {

  }
}
