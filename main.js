const wodName = document.querySelector('h2')
const time = document.querySelector('#time')
const rounds = document.querySelector('#rounds')
const workout = document.querySelector('#wod')

// get random wod and displays it 
// workout random 
function getRandomWod(){
    let random = Math.floor(Math.random() * workoutOfTheDay.length)
    return random; 
}

// next button to get next wod