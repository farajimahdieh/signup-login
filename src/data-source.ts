import { DataSource } from "typeorm";
import dotenv from "dotenv-flow"
import { users } from "./entities/user-entity";
dotenv.config();




export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: "users",
    synchronize: true,
    logging: false,
    entities: [users],
    subscribers: [],
    migrations: [],
})