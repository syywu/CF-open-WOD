import express from "express";
import logger from "morgan";
import router from "./routes/wod.js";
import cors from "cors";

const PORT = process.env.PORT;
const app = express();

app.use(logger("dev"));
app.use(cors());
app.use("/api/wod", router);

app.get("/", (req, res) => {
  res.render("index", { title: "home" });
});

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
