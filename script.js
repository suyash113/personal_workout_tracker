const backBiceps = document.querySelector(".back-biceps")
const chestTriceps = document.querySelector(".chest-triceps")
const legs = document.querySelector(".legs")
const shoulder = document.querySelector(".shoulder")
const workoutStage = document.querySelector(".workout-stage")


const dateDisplay = document.getElementById('current-date');

// Generate the string
const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric' 
});

// Inject it
dateDisplay.innerText = today;

backBiceps.addEventListener("click", function() {
    workoutStage.innerHTMl = ""
    workoutStage.innerHTMl = '' 
})