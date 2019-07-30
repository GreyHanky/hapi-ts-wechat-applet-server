// import { Table, Column, Model } from "sequelize-typescript";

// export interface IConsumer {
//   consumer_id: number;
//   user_id: string;
//   type: string;
//   amount: number;
//   remark: string;
// }

// @Table({
//   modelName: "consumer_dtl",
//   timestamps: false,
//   createdAt: "created_at",
//   updatedAt: "updated_at"
// })
// export default class Consumer extends Model<IConsumer> implements IConsumer {
//   @Column({
//     primaryKey: true,
//     autoIncrement: true,
//     allowNull: false
//   })
//   public consumer_id: number;
//   public user_id: string;
//   public type: string;
//   public amount: number;
//   public remark: string;
// }
