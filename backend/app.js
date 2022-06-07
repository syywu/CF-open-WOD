import express from "express";
import logger from "morgan";
import router from "./routes/wod.js";
import cors from "cors";

const PORT = process.env.PORT;
const app = express();
// const url = "https://www.crossfit.com/workout?page=";

app.use(logger("dev"));
app.use(cors());
app.use("/api/wod", router);

// let wod = [];

app.get("/", (req, res) => {
  res.render("index", { title: "home" });
});

// app.get("/wod", (req, res) => {
//   res.json(getWorkoutUrl());
// });

// function getWorkoutUrl() {
//   let url = [];
//   for (let i = 1; i < 5; i++) {
//     let page = url + i.toString();
//     axios
//       .get(page, { headers: { accept: "application/json" } })
//       .then((response) => {
//         let data = response.data;
//         // let data = JSON.parse(response.data);
//         for (let i = 0; i < data.wods.length; i++) {
//           url.push(data.wods[i].url);
//         }
//       })
//       .catch((err) => console.log(err));
//   }
//   return url;
// }

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
