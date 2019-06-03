import * as Joi from "joi";
import { IValidate } from "interfaces/api";

const testRquest = Joi.object().keys({
  code: Joi.string()
    .required()
    .description("测试参数")
});

const testReponse = Joi.object().keys({
  code: Joi.string().description("返回参数")
});

export const test: IValidate = {
  payload: testRquest,
  response: { schema: testReponse }
};
