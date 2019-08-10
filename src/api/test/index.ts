import * as Hapi from "hapi";
import TestRequest from "./controller";
import Validator from "./validator";

const testRequest = new TestRequest()

const route :Hapi.ServerRoute[]= [
    {
      method: "POST",
      path: "/getjwt",
      options: {
        handler: testRequest.request,
        auth: false, // 不需要用户验证
        tags: ["api", "TEST"],
        description: "测试接口",
        validate: {
          // payload: Validator.payload
        },
        // response: Validator.response
      }
    }
  ];

export default route