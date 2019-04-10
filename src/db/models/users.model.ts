import { Table, Column, Model } from "sequelize-typescript";

export interface IUsers {
  user_id?: number;
  nick_name: string;
  avatar_url: string;
  gender: number;
  open_id: string;
  session_key: string;
}

@Table({
  modelName: "users",
  timestamps: false,
  createdAt:'created_at',
  updatedAt:'updated_at',
})
export default class Users extends Model<Users> implements IUsers {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  })
  public user_id: number;

  @Column
  public nick_name: string;

  @Column
  public avatar_url: string;

  @Column
  public gender: number;

  @Column
  public open_id: string;

  @Column
  public session_key: string;
}
