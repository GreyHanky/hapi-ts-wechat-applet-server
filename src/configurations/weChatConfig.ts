import Configs from "./config";

export default class WeChatConfig {
  public wxAppid: string;
  public wxSecret: string;

  constructor() {
    const { wxAppid, wxSecret } = Configs.get<WeChatConfig>(
      "weChat"
    );
    this.wxAppid = wxAppid;
    this.wxSecret = wxSecret;
  }
}