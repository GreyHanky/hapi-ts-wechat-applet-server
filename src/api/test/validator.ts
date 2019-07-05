import * as Joi from "joi";

const testRquest = Joi.object().keys({
  code: Joi.string()
    .required()
    .description("测试参数")
});

const testReponse = Joi.object().keys({
  code: Joi.string().description("返回参数")
});

export default {
  payload: testRquest,
  response: { schema: testReponse }
};
