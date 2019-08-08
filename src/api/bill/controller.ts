import * as Hapi from "hapi";
import { EnumHelpers } from "../../utils";
import { IAddBillPayload, IGetBillList } from "./validator";
import Bill from "../../db/models/bill";
import * as Boom from 'boom';

const BillTypes = Bill.getBillTypes();

export default class Controller {
  // 获取账单消费类型
  public async getBillTypes(request: Hapi.Request, h: Hapi.ResponseToolkit) {
    return { data: EnumHelpers.getKeyAndValues(BillTypes) };
  }

  public async add(request: IAddBillPayload, h: Hapi.ResponseToolkit) {
    const { amount, type, remark } = request.payload;
    if(!Reflect.has(BillTypes,type)) {
      return Boom.badRequest('type类型不正确')
    }

    const { user: consumer } = request.auth.credentials;
    try {
    await Bill.addBill({ amount, type, remark, consumer: Number(consumer) });
    } catch (error) {
      return Boom.badImplementation(error)
    }
    return { status: "OK" };
  }

  public async getBillList(request: IGetBillList, h: Hapi.ResponseToolkit){

  }

}
