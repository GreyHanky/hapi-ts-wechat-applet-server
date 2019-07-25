import * as Hapi from "hapi";
import WxLoginController from "./controller";
import * as validator from "./validator";

export default (server: Hapi.Server): Hapi.ServerRoute[] => {
  const loginController = new WxLoginController();
  server.bind(loginController);

  return [
    {
      method: "POST",
      path: "/wxLogin",
      options: {
        handler: loginController.wxLogin,
        auth: false, // 不需要用户验证
        tags: ["api", "LOGIN"],
        description: "微信登陆认证",
        validate: {
          payload:validator.wxLogin.payload,
        },
        response: validator.wxLogin.response
      }
    }
  ];
};
