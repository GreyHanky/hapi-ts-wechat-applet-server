import { Table, Column, Model } from "sequelize-typescript";

@Table({
  tableName: "users",
  timestamps: false
})
export default class Users extends Model<Users> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  })
  public id: number;

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
