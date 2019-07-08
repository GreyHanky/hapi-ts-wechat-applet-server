import * as Hapi from "hapi";
import Controller from "./controller";
import * as Validator from "./validator";

export default (server: Hapi.Server) => {
  const controller = new Controller();

  return [
    {
      method: "POST",
      path: "/consumer-list",
      options: {
        handler: controller.request,
        auth: false, // 不需要用户验证
        tags: ["api", "consumer"],
        description: "消费账单列表",
        validate: {
          payload: Validator.test.payload
        },
        response: Validator.test.response
      }
    }
  ];
};
