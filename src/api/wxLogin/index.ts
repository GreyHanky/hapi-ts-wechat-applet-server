import * as Hapi from "hapi";
import WxLoginController from "./controller";
import * as validator from "./validator";

const loginController = new WxLoginController();

const route: Hapi.ServerRoute[] = [
  {
    method: "POST",
    path: "/wxLogin",
    options: {
      bind: loginController,
      handler: loginController.wxLogin,
      auth: false, // 不需要用户验证
      tags: ["api", "LOGIN"],
      description: "微信登陆认证",
      validate: {
        payload: validator.wxLogin.payload
      },
      response: validator.wxLogin.response
    }
  }
];

export default route;
