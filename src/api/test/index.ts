import * as Hapi from "hapi";
import TestRequest from "./controller";
import Validator from "./validator";

export default (server: Hapi.Server): Hapi.ServerRoute[] => {
  const testRequest = new TestRequest();

  return [
    {
      method: "POST",
      path: "/test",
      options: {
        handler: testRequest.request,
        auth: false, // 不需要用户验证
        tags: ["api", "TEST"],
        description: "测试接口",
        validate: {
          payload: Validator.payload
        },
        response: Validator.response
      }
    }
  ];
};
