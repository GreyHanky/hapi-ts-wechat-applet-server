import * as Hapi from "hapi";
import Controller from "./controller";
import validator from "./validator";

const controller = new Controller();

const route: Hapi.ServerRoute[] = [
  {
    method: ["GET", "POST"],
    path: "/bill/type-list",
    options: {
      handler: controller.getBillTypes,
      auth: false, // 不需要用户验证
      tags: ["api", "consumer"],
      description: "消费账单类型列表",
      response: validator.getBillTypes.response
    }
  }
];

export default route;
