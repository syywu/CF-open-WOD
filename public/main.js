const url = "/api";
const wodName = document.querySelector("h2");
const time = document.querySelector("#time");
const rounds = document.querySelector("#rounds");
const workout = document.querySelector("#wod");
const nextBtn = document.querySelector("button");
let wod;

// get random wod and displays it
// workout random
async function getRandomWod() {
  const res = await fetch(`${url}/wod`);
  const data = res.json();
  let wod = data.payload;
  displayWod(wod);
  return wod;
}
getRandomWod();
// let random = Math.floor(Math.random() * workoutOfTheDay.length);
// randomWod = workoutOfTheDay[random];
// return randomWod;

function displayWod(wod) {
  wodName.textContent = wod.name.toUpperCase();
  time.textContent = `Time: ${wod.time}`;
  rounds.textContent = `Rounds: ${wod.rounds}`;
  workout.textContent = wod.wod;
}
displayWod(wod);

// next button to get next wod
nextBtn.addEventListener("click", function (e) {
  e.preventDefault();
  getRandomWod();
  displayWod(wod);
});
