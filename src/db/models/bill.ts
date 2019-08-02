import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";

import User from "./user";
import BaseRecordEntity from "../../helper/BaseRecordEntity";
import { BillTypes } from "../../helper/constants";

@Entity()
class Bill extends BaseRecordEntity {
  public static getBillTypes() {
    return BillTypes;
  }

  @Column()
  public amount: number;

  @Column()
  public type: string;

  @Column({ length: 150 })
  public remark: string;

  @ManyToOne(type => User, user => user.id)
  @JoinColumn({ name: "consumer_id" })
  public consumer: number;
}

export default Bill;
