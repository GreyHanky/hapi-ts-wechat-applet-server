import Users from "../../db/models/users.model";

export default [
  {
    method: "GET",
    path: "/hello",
    handler: async (request, h) => {
      const results = await Users.findOrCreate({
        where: { open_id: 'ojMHa1XuP_ADU7rqaB9eew2ZFmF4' },
      });
      return results;
    },
    config: {
      auth: false, // 不需要用户验证
      tags: ["api", "GROUP_NAME"],
      description: "创建订单"
    }
  }
];
