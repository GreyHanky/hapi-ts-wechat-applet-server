import * as Hapi from "hapi";
import { EnumHelpers } from "../../utils";
import { IAddBillPayload } from "./validator";
import Bill from "../../db/models/bill";

const BillTypes = Bill.getBillTypes();

export default class Controller {
  // 获取账单消费类型
  public async getBillTypes(request: Hapi.Request, h: Hapi.ResponseToolkit) {
    return { data: EnumHelpers.getKeyAndValues(BillTypes) };
  }

  public async add(request: IAddBillPayload, h: Hapi.ResponseToolkit) {
    const { amount, type, remark } = request.payload;
    const { user: consumer } = request.auth.credentials;
    await Bill.addBill({ amount, type, remark, consumer: Number(consumer) });
    return { status: "OK" };
  }
}
