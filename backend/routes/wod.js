import express from "express";
import { getWorkout } from "../models/wod.js";
const router = express.Router();

router.get("/", async (req, res) => {
  res.json([{ payload: await getWorkout() }]);
});

export default router;
