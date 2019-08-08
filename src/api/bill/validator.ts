import * as Joi from "joi";
import { Request } from "hapi";

export interface IAddBillPayload extends Request {
  payload: {
    amount: number;
    type: string;
    remark: string;
  };
}

export interface IGetBillList extends Request {
  payload: {
    startTime: number;
    endTime: number;
  };
}

// 新增账单接口参数验证
const addPayload = Joi.object().keys({
  amount: Joi.number()
    .required()
    .description("消费金额"),
  type: Joi.string()
    .required()
    .description("消费类型"),
  remark: Joi.string().description("备注")
});

// 获取列表参数验证
const getBillListPayload = Joi.object().keys({
  startTime: Joi.number()
    .required()
    .description("查询开始时间戳"),
  endTime: Joi.number()
    .required()
    .description("查询结束时间戳")
});

const addReponse = Joi.object().keys({
  status: Joi.string().description("操作状态")
});

const getBillTypesReponse = Joi.object().keys({
  data: Joi.array().description("类型枚举列表")
});

const validator = {
  add: {
    payload: addPayload,
    response: { schema: addReponse }
  },
  getBillTypes: {
    response: { schema: getBillTypesReponse }
  },
  getBillList: {
    payload: getBillListPayload,
    response: { schema: getBillTypesReponse }
  }
};

export default validator;
