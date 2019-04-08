import * as Hapi from "hapi";
import { getWeChatConfigs, getServerConfigs } from "../../configurations";
import {
  IMixinsServerWechat,
  IWeChatConifg,
  IServerConfigurations
} from "../../interfaces/config";
import WxLoginController from "./controller";
import { wxLogin } from "./validator";

export default (server: Hapi.Server) => {
  const weChatConfig: IWeChatConifg = getWeChatConfigs();
  const serverConfig: IServerConfigurations = getServerConfigs();
  const configs: IMixinsServerWechat = { ...weChatConfig, ...serverConfig };
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
