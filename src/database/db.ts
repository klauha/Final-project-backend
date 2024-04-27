import "reflect-metadata"
import "dotenv/config"
import { DataSource } from "typeorm"
import { Roles1708965513342 } from "./migrations/1714206018455-roles"
import { Users1714206674698 } from "./migrations/1714206674698-users"
import { IssueTypes1714208651356 } from "./migrations/1714208651356-issueTypes"
import { Depataments1714209283374 } from "./migrations/1714209283374-depataments"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT || 3306),
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "test",
    entities:
        [

        ],
    migrations:
        [
            Roles1708965513342,
            Users1714206674698,
            IssueTypes1714208651356,
            Depataments1714209283374

        ],
    synchronize: false,
    logging: false,
})