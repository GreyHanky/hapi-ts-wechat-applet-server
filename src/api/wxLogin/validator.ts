import * as Joi from "joi";
import { RouteOptionsResponse } from "hapi";

const payload = Joi.object().keys({
  code: Joi.string()
    .required()
    .description("微信用户登录的临时code"),

  encryptedData: Joi.string()
    .required()
    .description("微信用户信息encryptedData"),

  iv: Joi.string()
    .required()
    .description("微信用户信息iv")
});

const response: RouteOptionsResponse = {
  schema: Joi.object().keys({
    token: Joi.string().description("认证信息")
  })
};

export const wxLogin = { payload, response };
