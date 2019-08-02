import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";

import User from "./user";
import BaseRecordEntity from "../../helper/BaseRecordEntity";
import { BillTypes } from "../../helper/constants";

@Entity()
class Bill extends BaseRecordEntity {
  @Column()
  public amount: number;

  @Column("enum", { enum: BillTypes })
  public type: BillTypes;

  @ManyToOne(type => User, user => user.id)
  @JoinColumn()
  public consumer: number;
}

export default Bill;
