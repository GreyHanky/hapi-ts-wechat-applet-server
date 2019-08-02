import * as Hapi from "hapi";
import UserModel from "../../db/models/user";
import { decryptedData } from "../../utils";
import { Config } from "../../configurations";
import { getSession, generateToken } from "./controller.helper";

interface ILoginReq extends Hapi.Request {
  payload: {
    code: string;
    encryptedData: string;
    iv: string;
  };
}

export default class WxLoginController {
  private grant_type = "authorization_code";

  public async wxLogin(request: ILoginReq, h: Hapi.ResponseToolkit) {
    const appid = Config.weChat.wxAppid; // 小程序 appid
    const secret = Config.weChat.wxSecret; // 小程序 appsecret

    const { code, encryptedData, iv } = request.payload;

    const { openid, sessionKey } = await getSession({
      appid,
      secret,
      js_code: code,
      grant_type: this.grant_type
    });

    const userInfo = decryptedData(encryptedData, iv, sessionKey, appid);
    let user;

    try {
      // 查找用户 抛出错误则创建一个用户
      user = await UserModel.findOneOrFail({ openid });
    } catch (error) {
      // 创建用户
      const user = await UserModel.createUser({
        avatarUrl: userInfo.avatarUrl,
        nickName: userInfo.nickName,
        openid,
        relevanceUsers:''
      });
      return { token: generateToken(user.id) };
    }
    // 返回token
    return { token: generateToken(user.id) };
  }
}
