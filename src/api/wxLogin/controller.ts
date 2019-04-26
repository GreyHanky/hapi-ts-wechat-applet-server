import * as Hapi from "hapi";
import axios from "axios";
import * as JWT from "jsonwebtoken";
import { IWeChatConfig } from "../../configurations";
import { IWxLoginRquest, IWxLoginParams } from "./interfaces";
import decryptData from "../../utils/decrypted-data";
import Users, { IUsers } from "../../db/models/users.model";

export interface IWxLoginConfig extends IWeChatConfig {
  jwtExpiration: string;
  jwtSecret: string;
}

export default class WxLoginController {
  private config: IWxLoginConfig;
  private model = Users;
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

    const user = await this.model.findOrCreate({
      where: { open_id: openid }
    });

    const userInfo = decryptData(encryptedData, iv, sessionKey, appid);

    await this.updateUser(
      {
        nick_name: userInfo.nickName,
        gender: userInfo.gender,
        avatar_url: userInfo.avatarUrl,
        open_id: openid,
        session_key: sessionKey
      },
      openid
    );

    const token = { token: this.generateToken(user[0].id) };

    return token;
  }

  public async updateUser(updateData: IUsers, openid: string) {
    await this.model.update(updateData, {
      where: { open_id: openid }
    });
  }

  private generateToken(userId: number) {
    const payload = {
      id: userId
    };
    const jwtSecret = this.config.jwtSecret;
    const jwtExpiration = this.config.jwtExpiration;
    return JWT.sign(payload, jwtSecret, { expiresIn: jwtExpiration });
  }

  // 通过微信服务器获取opid
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
