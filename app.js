import express from "express";
import cheerio from "cheerio";
import axios from "axios";
import logger from "morgan";

const PORT = process.env.PORT || "3000";
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, function () {
  console.log(`listening to port ${PORT}`);
});
