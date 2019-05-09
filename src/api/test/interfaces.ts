export interface IWxLoginRquest {
  payload: {
    code: string;
    encryptedData: string;
    iv: string;
  };
}

export interface IWxLoginParams {
  appid: string;
  secret: string;
  js_code: string;
  grant_type: string;
}

