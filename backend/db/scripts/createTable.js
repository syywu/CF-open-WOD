import { query } from "../index.js";

const sqlStr = `CREATE TABLE IF NOT EXISTS
wod (wod_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
name TEXT, time TEXT, rounds INT, wod TEXT)`;

async function createTable() {
  const res = await query(sqlStr);
  console.log(res.command, "table created");
}
createTable();
