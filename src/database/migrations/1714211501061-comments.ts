import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Comments1714211501061 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    
    await queryRunner.createTable(
        new Table({
            name: "comments",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "content",
                    type: "text",
                    isNullable: false,
                },
                {
                    name: "issue_id",
                    type: "int",
                    isNullable: false,
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()",
                    onUpdate: "now()"
                },
            ],
            foreignKeys: [
                {
                    columnNames: ["issue_id"],
                    referencedTableName: "issues",
                    referencedColumnNames: ["id"],
                    onDelete: "CASCADE",
                }
            ],
        }),
        true
    );
}

public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("comments");
}
}