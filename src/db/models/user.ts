import Bill from "./bill";
import BaseRecordEntity from '../../helper/BaseRecordEntity';
import {
  Entity,
  Column,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";


export interface IUsers {
  // 昵称
  nickName: string;
  // 头像地址
  avatarUrl: string;
  // 关联的用户id
  relevanceUsers: string;

  openid: string;
}

@Entity()
class User extends BaseRecordEntity implements IUsers {
  public static findByOpenid(openid: string) {
    return this.createQueryBuilder("users")
      .where("users.open_id = :openid", { openid })
      .getOne();
  }

  public static async createUser(userInfo: IUsers) {
    return this.save(this.create(userInfo));
  }

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
  @Column({ name: "relevance_users" })
  public relevanceUsers: string;

  // 微信openid
  @Column({ name: "open_id" })
  public openid: string;

  @OneToMany(type => Bill, bill => bill.consumer)
  public bills: Bill[];
}

export default User;
