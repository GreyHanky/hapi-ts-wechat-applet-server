import {
  BaseEntity,
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn
} from "typeorm";

import Users from "./users";

@Entity()
class Bill extends BaseEntity {
  // public static findByOpenid(openid: string) {
  //   return this.createQueryBuilder("users")
  //     .where("users.open_id = :openid", { openid })
  //     .getOne();
  // }

  // public static async createUser(userInfo: IUsers) {
  //   const user = Object.assign(new Users(), userInfo);
  //   return await user.save();
  // }
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ name: "creation_time" })
  public creationTime: Date;

  @Column()
  public amount: number;

  @Column()
  public type: string;

  @OneToOne(type => Users, users => users.id)
  @JoinColumn()
  public consumer: string;
}

export default Bill;
