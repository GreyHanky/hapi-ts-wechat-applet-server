import * as Hapi from "hapi";
import UsersModel from "../../db/models/users";
import { decryptedData } from "../../utils";
import { Config } from "../../configurations";
import { getSession, generateToken } from "./controller.helper";

const usersModel = new UsersModel();

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
      // 查找用户
      user = await usersModel.findOneOrFail({ openid });
    } catch (error) {
      // 创建用户
      const user = await usersModel.createUser({
        nickName: userInfo.nickName,
        avatarUrl: userInfo.avatarUrl,
        openid,
        group: "base"
      });
      return { token: generateToken(user.userid) };
    }

    // 更新用户信息
    usersModel.save(user, {
      nickName: userInfo.nickName,
      avatarUrl: userInfo.avatarUrl
    });
    // 返回token
    return { token: generateToken(user.userid) };
  }
}
