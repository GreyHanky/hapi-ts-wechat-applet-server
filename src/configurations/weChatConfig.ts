import configs from "./config";

export default class WeChatConfig {
  public wxAppid: string;
  public wxSecret: string;

  constructor() {
    const { wxAppid, wxSecret } = configs.get(
      "weChat"
    );
    this.wxAppid = wxAppid;
    this.wxSecret = wxSecret;
  }
}