import { query } from "../index.js";

async function dropTable() {
  const res = await query(`DROP TABLE IF EXISTS wod;`);
  console.log(res.command, "dropped table");
}
dropTable();
