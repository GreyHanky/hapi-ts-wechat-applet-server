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
      cache: {
        expiresIn: 1000 * 60 * 60
      },
      auth: false, // 不需要用户验证
      tags: ["api", "consumer"],
      description: "消费账单类型列表",
      response: validator.getBillTypes.response
    }
  },
  {
    method: ["POST"],
    path: "/bill/add",
    options: {
      handler: controller.add,
      // auth: false, // 不需要用户验证
      tags: ["api", "consumer"],
      description: "消费账单类型列表",
      validate: {
        payload: validator.add.payload
      },
      response: validator.add.response
    }
  }
];

export default route;
