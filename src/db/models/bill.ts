import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";

import User from "./user";
import BaseRecordEntity from "../../helper/BaseRecordEntity";
import { BillTypes } from "../../helper/constants";
import { defaultInput } from "../../utils/decorator";

export interface IBill {
  // 消费金额
  amount: number;
  // 消费类型
  type: string;
  // 备注
  remark?: string;
  // 消费者
  consumer: number;
}

@Entity()
class Bill extends BaseRecordEntity {
  public static getBillTypes() {
    return BillTypes;
  }

  @defaultInput({ remark: "" })
  public static addBill(data: IBill) {
    return this.save(this.create(data));
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
