import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "2001A$kLua",
    database: "crud"
}) 