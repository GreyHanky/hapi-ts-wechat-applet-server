import * as Hapi from "hapi";
import axios from "axios";
import * as JWT from "jsonwebtoken";
import { IWeChatConfig } from "../../configurations";
import { decryptedData } from "../../utils";
import UsersModel from "../../db/models/users";
import { IWxLoginRquest, IWxLoginParams } from "./interfaces";

const usersModel = new UsersModel();

export interface IWxLoginConfig extends IWeChatConfig {
  jwtExpiration: string;
  jwtSecret: string;
}

export default class WxLoginController {
  private config: IWxLoginConfig;
  private wxSessionUrl = "https://api.weixin.qq.com/sns/jscode2session";
  private grant_type = "authorization_code";

  constructor(conifg: IWxLoginConfig) {
    this.config = conifg;
  }

  public async wxLogin(request: IWxLoginRquest, h: Hapi.ResponseToolkit) {
    const appid = this.config.wxAppid; // 小程序 appid
    const secret = this.config.wxSecret; // 小程序 appsecret

    const { code, encryptedData, iv } = request.payload;

    const { openid, sessionKey } = await this.getSession({
      appid,
      secret,
      js_code: code,
      grant_type: this.grant_type
    });

    const userInfo = decryptedData(encryptedData, iv, sessionKey, appid);
    try {
      // 查找更新用户
      const user = await usersModel.findOneOrFail({ openid });
      await usersModel.save(user, {
        nickName: userInfo.nickName,
        avatarUrl: userInfo.avatarUrl
      });
      return { token: this.generateToken(user.userid) };
    } catch (error) {
      // 创建用户
      const user = await usersModel.createUser({
        nickName: userInfo.nickName,
        avatarUrl: userInfo.avatarUrl,
        openid,
        group: "base"
      });
      return { token: this.generateToken(user.userid) };
    }
  }
  /**
   * 签发JWT
   * @param userId
   */
  private generateToken(userId: string) {
    const payload = {
      id: userId
    };
    const jwtSecret = this.config.jwtSecret;
    const jwtExpiration = this.config.jwtExpiration;
    return JWT.sign(payload, jwtSecret, { expiresIn: jwtExpiration });
  }

  /**
   * 微信登陆
   * @param params IWxLoginParams
   */
  private async getSession(params: IWxLoginParams) {
    const response = await axios({
      url: this.wxSessionUrl,
      method: "GET",
      params
    });
    const { openid, session_key: sessionKey } = response.data;
    return { openid, sessionKey };
  }
}
