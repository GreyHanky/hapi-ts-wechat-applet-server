import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  getConnection
} from "typeorm";

export interface IUsers {
  id?: string;
  // 昵称
  nickName: string;
  // 头像地址
  avatarUrl: string;
  // 关联的用户id
  relevanceUser: string;

  openid: string;
}

@Entity()
class Users extends BaseEntity implements IUsers {
  public static findByOpenid(openid: string) {
    return this.createQueryBuilder("users")
      .where("users.open_id = :openid", { openid })
      .getOne();
  }

  public static async createUser(userInfo: IUsers) {
    const user = Object.assign(new Users(), userInfo);
    return await user.save();
  }

  @PrimaryGeneratedColumn("uuid")
  public id: string;

  // 用户名
  @Column({
    length: 500,
    name: "nick_name"
  })
  public nickName: string;

  // 头像地址
  @Column({ name: "avatar_url" })
  public avatarUrl: string;

  // 关联的用户
  @Column({ name: "relevance_user" })
  public relevanceUser: string;

  // 微信openid
  @Column({ name: "open_id" })
  public openid: string;
}

export default Users;
