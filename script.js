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

backBiceps.addEventListener("click", BackBiceps )

function BackBiceps () {
    workoutStage.innerHTML = `<div class="entire-page">
        <div class="all-exercises">
            <i class="fa-sharp fa-solid fa-arrow-left" id="back-btn"></i>
            <div class="backHeading-date">
                <h1>BACK & BICEPS SESSION</h1>
                <p id="current-date"></p>
            </div>
        </div>
        <div class="main-exercise">

        </div>
        <h3 id="add-exer">+Add exercise</h3>
        <div class="modal" id="modal">
            <i class="fa-regular fa-trash-can" id="delete-exer-btn"></i>
            <div id="modal-inner">
            
            </div>
        </div>
    </div>`

    document.getElementById('add-exer').addEventListener("click", newExercise)


}


function newExercise () {
    const modal = document.getElementById('modal')
    let modalInner = document.getElementById('modal-inner')
    modalInner.innerHTML = `
                <h2>Add new exercise</h2>
                <p>Create a new exercise to track your progress</p>

                <div class='form'>
                    <label for="exercise-name">Exercise name</label>
                    <input type="text" id="exercise-name" placeholder="Lat-pulldown" required>
                    <label for="goal">Goal</label>
                    <input type="text" id="goal" placeholder="e.g., 3-4 sets progressive overload">
                    <button id="submit">Add Exercise</button>
                </div>
                `
    
    modal.style.display = 'flex'

    
}