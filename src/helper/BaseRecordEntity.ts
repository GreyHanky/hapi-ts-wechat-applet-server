import { getTime } from "date-fns";
import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  PrimaryGeneratedColumn,
  ValueTransformer
} from "typeorm";

const dateTransformer: ValueTransformer = {
  from(value: number) {
    return value && new Date(value);
  },
  to(value: Date) {
    return getTime(value);
  }
};

export default class BaseRecordEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ unsigned: true })
  public id: number;

  // @CreateDateColumn({ type: 'timestamp' })
  @Column({ type: "bigint", transformer: dateTransformer })
  public createdAt: Date;

  // @UpdateDateColumn({ type: 'timestamp' })
  @Column({ type: "bigint", transformer: dateTransformer })
  public updatedAt: Date;

  @BeforeUpdate()
  private updateDate(): void {
    this.updatedAt = new Date();
  }

  @BeforeInsert()
  private initDate(): void {
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
