import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: process.env.MYAQL_HOST || "localhost",
    port: process.env.MYAQL_PORT || 3306,
    user: process.env.MYAQL_USER || "root",
    password: process.env.MYAQL_PASSWORD || "",
    database: process.env.MYAQL_DATABASE || "tienda",
})