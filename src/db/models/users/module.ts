import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

export interface IUsers {
  userid?: string;

  nickName: string;

  avatarUrl: string;

  group?: string;

  openid?: string;
}

@Entity("users")
export default class Users implements IUsers {
  @PrimaryGeneratedColumn("uuid", { name: "user_id" })
  public userid: string;

  // 用户名
  @Column({
    length: 500,
    name: "nick_name"
  })
  public nickName: string;

  // 头像地址
  @Column({ name: "avatar_url" })
  public avatarUrl: string;

  // 分组
  @Column()
  public group: string;

  // 微信openid
  @Column({ name: "open_id" })
  public openid: string;
}
