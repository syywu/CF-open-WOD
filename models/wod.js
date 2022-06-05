import { query } from "../db/index.js";

export async function getWorkout() {
  const res = await query(`SELECT * FROM wod`);
  return res.rows;
}
