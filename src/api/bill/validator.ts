import * as Joi from "joi";

const addPayload = Joi.object().keys({
  amount: Joi.number()
    .required()
    .description("消费金额"),
  type: Joi.string()
    .required()
    .description("消费类型"),
  remark: Joi.string().description("备注")
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
  }
};

export default validator;
