// 封装的 decryptData，用于解码小程序的 encryptData
import * as crypto from "crypto";

export interface IDecodeUserData {
  avatarUrl: string;
  gender: number;
  nickName: string;
  watermark: {
    appid: string;
  };
}

function decryptData(
  encryptedData: string,
  iv: string,
  sessionKey: string,
  appid: string
) {
  // base64 decode
  const encryptedDataNew = Buffer.from(encryptedData, "base64");
  const sessionKeyNew = Buffer.from(sessionKey, "base64");
  const ivNew = Buffer.from(iv, "base64");

  let decoded = "";
  let decodeData: IDecodeUserData;
  try {
    // 解密，使用的算法是 aes-128-cbc
    const decipher = crypto.createDecipheriv(
      "aes-128-cbc",
      sessionKeyNew,
      ivNew
    );
    // 设置自动 padding 为 true，删除填充补位
    decipher.setAutoPadding(true);
    decoded = decipher.update(encryptedDataNew, undefined, "utf8");
    decoded += decipher.final("utf8");
    decodeData = JSON.parse(decoded);
    // decoded 是解密后的用户信息
  } catch (err) {
    throw new Error("Illegal Buffer" + err);
  }

  // 解密后的用户数据中会有一个 watermark 属性，这个属性中包含这个小程序的 appid 和时间戳，下面是校验 appid
  if (decodeData.watermark.appid !== appid) {
    throw new Error("Illegal Buffer");
  }

  // 返回解密后的用户数据
  return decodeData;
}

export default decryptData;
