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
      handler: loginController.wxLogin,
      config: {
        auth: false, // 不需要用户验证
        tags: ["api", "GROUP_NAME"],
        description: "创建订单",
        validate: {
          payload: Validators.wxLogin
        }
      }
    }
  ];
};
