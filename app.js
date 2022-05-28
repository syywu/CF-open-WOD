import express from "express";
import cheerio from "cheerio";
import axios from "axios";
import logger from "morgan";
import router from "./routes/wod.js";

const PORT = process.env.PORT || "3000";
const app = express();
const url = "https://www.crossfit.com/workout";

app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.json());
app.use(express.static("public"));
app.use("/api/wod", router);

app.get("/", (req, res) => {
  res.render("index", { title: "home" });
});

// axios(url)
//   .then((response) => {
//     const html = response.data;
//     const $ = cheerio.load(html);
//     const wod = [];
//     $("wodRaw", html).each(function () {
//       const text = $(this).text();
//       wod.push({ text });
//     });
//     console.log(wod);
//   })
//   .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
