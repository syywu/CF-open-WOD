import { workoutOfTheDay } from "../../obj.js";
import { query } from "../index.js";

async function populateTable() {
  for (let i = 0; i < workoutOfTheDay.length; i++) {
    const res = await query(
      `INSERT INTO wod (name, time , rounds, wod) VALUES ($1, $2, $3, $4) RETURNING *`,
      [
        workoutOfTheDay[i].name,
        workoutOfTheDay[i].time,
        workoutOfTheDay[i].rounds,
        workoutOfTheDay[i].wod,
      ]
    );
    console.log(res.rows[0]);
  }
}

populateTable();
