import * as Hapi from "hapi";
import Controller from "./controller";
import * as Validator from "./validator";

const controller = new Controller();

const route: Hapi.ServerRoute[] = [
  {
    method: "*",
    path: "/test",
    options: {
      handler: controller.request,
      auth: false, // 不需要用户验证
      tags: ["api", "TEST"],
      description: "测试接口",
      validate: {
        payload: Validator.test.payload
      },
      response: Validator.test.response
    }
  }
];

export default route;
