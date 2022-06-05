import express from "express";
import { getWorkout } from "../models/wod.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.json(getWorkout());
});

export default router;
