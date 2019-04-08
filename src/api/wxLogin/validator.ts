import * as Joi from "joi";

export const wxLogin = Joi.object().keys({
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
