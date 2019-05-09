import * as Hapi from "hapi";
import TestRequest from "./controller";
import * as Validator from "./validator";

export default (server: Hapi.Server) => {
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
        plugins: {
          "hapi-swagger": {
            payloadType: "form"
          }
        },
        validate: {
          payload: Validator.test.payload
        },
        response: Validator.test.response
      }
    }
  ];
};
