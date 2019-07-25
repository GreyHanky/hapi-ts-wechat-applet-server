import { Config } from "../../configurations";
import axios from "axios";
import * as JWT from "jsonwebtoken";

const wxSessionUrl = "https://api.weixin.qq.com/sns/jscode2session";

export interface IWxLoginParams {
  appid: string;
  secret: string;
  js_code: string;
  grant_type: string;
}

/**
 * 微信登陆
 * @param {object} {appid,secret,js_code,grant_type}
 * @returns {object} {openid, sessionKey}
 */
export async function getSession(params: IWxLoginParams) {
  const response = await axios({
    url: wxSessionUrl,
    method: "GET",
    params
  });
  const { openid, session_key: sessionKey } = response.data;
  return { openid, sessionKey };
}

/**
 * 签发JWT
 * @param userId
 * @returns token
 */
export function generateToken(userId: string) {
  const payload = {
    id: userId
  };
  return JWT.sign(payload, Config.server.jwtSecret, {
    expiresIn: Config.server.jwtExpiration
  });
}
