import * as Hapi from "hapi";
import { WeChatConfig, ServerConfig } from "../../configurations";
import WxLoginController from "./controller";
import { wxLogin } from "./validator";

export default (server: Hapi.Server) => {
  const weChatConfig = new WeChatConfig();
  const { jwtSecret, jwtExpiration } = new ServerConfig();
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
          payload: wxLogin
        }
      }
    }
  ];
};
