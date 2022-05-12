const wodName = document.querySelector('h2')
const time = document.querySelector('#time')
const rounds = document.querySelector('#rounds')
const workout = document.querySelector('#wod')
const nextBtn = document.querySelector('#next-button')
let randomWod;



// get random wod and displays it 
// workout random 
function getRandomWod(){
    let random = Math.floor(Math.random() * workoutOfTheDay.length)
    randomWod = workoutOfTheDay[random]
    return randomWod;

}

getRandomWod();

function displayWod(){
   
    wodName.textContent = randomWod['name']
    time.textContent = `Time: ${randomWod['time']}`
    rounds.textContent = `Rounds: ${randomWod['rounds']}`
    workout.textContent = randomWod['wod']
}
displayWod();
// next button to get next wod

nextBtn.addEventListener('click', getRandomWod)
