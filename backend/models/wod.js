import { query } from "../db/index.js";

export async function getWorkout() {
  const res = await query(`SELECT wod_id, name, time, rounds, wod
  FROM wod  
  ORDER BY RANDOM()  
  LIMIT 1;`);
  return res.rows;
}
