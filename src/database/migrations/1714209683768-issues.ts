import { MigrationInterface, QueryRunner, Table } from "typeorm";

export enum EstadoDeIncidencia {
    ABIERTA = 'ABIERTA',
    EN_TRAMITE = 'EN TRÁMITE',
    CERRADA = 'CERRADA',
}



export class Issues1714209683768 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "issues",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "title",
                        type: "varchar",
                        length: "255",
                        isNullable: false,
                    },
                    {
                        name: "description",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "status",
                        type: "enum",
                        enum: Object.values(EstadoDeIncidencia),
                        default: `'${EstadoDeIncidencia.ABIERTA}'`,
                        isNullable: false,
                    },
                    {
                        name: "issue_type_id",
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: "user_id",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "department_id",
                        type: "int",
                        isNullable: true,
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
                        columnNames: ["issue_type_id"],
                        referencedTableName: "issue_types",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                    },
                    {
                        columnNames: ["user_id"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        onDelete: "SET NULL",
                    },
                    {
                        columnNames: ["department_id"],
                        referencedTableName: "departments",
                        referencedColumnNames: ["id"],
                        onDelete: "SET NULL",
                    }
                ],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("issues");
    }
}