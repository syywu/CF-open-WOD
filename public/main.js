const wodName = document.querySelector("h2");
const time = document.querySelector("#time");
const rounds = document.querySelector("#rounds");
const workout = document.querySelector("#wod");
const nextBtn = document.querySelector("button");
let randomWod;

// get random wod and displays it
// workout random
function getRandomWod() {
  let random = Math.floor(Math.random() * workoutOfTheDay.length);
  randomWod = workoutOfTheDay[random];
  return randomWod;
}

function displayWod() {
  wodName.textContent = randomWod["name"].toUpperCase();
  time.textContent = `Time: ${randomWod["time"]}`;
  rounds.textContent = `Rounds: ${randomWod["rounds"]}`;
  workout.textContent = randomWod["wod"];
}

// next button to get next wod

nextBtn.addEventListener("click", function (e) {
  e.preventDefault();
  getRandomWod();
  displayWod();
});
