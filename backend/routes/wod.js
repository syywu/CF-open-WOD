import express from "express";
import { getWorkout } from "../models/wod.js";
const router = express.Router();

router.get("/", async (req, res) => {
  res.json({ sucess: true, payload: await getWorkout() });
});

export default router;
