import { MigrationInterface, QueryRunner, Table } from "typeorm";

const TableName = "users";

export class Users1563762493085 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: TableName,
        columns: [
          {
            name: "user_id",
            type: "varchar",
            isPrimary: true
          },
          {
            name: "nick_name",
            type: "varchar"
          },
          {
            name: "avatar_url",
            type: "varchar"
          },
          {
            name: "group",
            type: "varchar"
          },
          {
            name: "open_id",
            type: "varchar"
          },
        ]
      })
      // true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable(TableName);
  }
}
