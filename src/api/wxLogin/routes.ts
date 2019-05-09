import * as Hapi from "hapi";
import { Config, IServerConfig, IWeChatConfig } from "../../configurations";
import WxLoginController from "./controller";
import * as Validators from "./validator";

export default (server: Hapi.Server) => {
  const weChatConfig = Config.get<IWeChatConfig>("weChat");
  const { jwtSecret, jwtExpiration } = Config.get<IServerConfig>("server");
  const configs = { ...weChatConfig, jwtSecret, jwtExpiration };
  const loginController = new WxLoginController(configs);
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
          payload: Validators.wxLogin
        }
      }
    }
  ];
};
