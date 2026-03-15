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
                <p>${dateDisplay.innerText}</p>
            </div>
        </div>
        <div class="main-exercise" id="main-exercise">

        </div>
        <h3 id="add-exer">+Add exercise</h3>
        <div class="modal" id="modal">
            <i class="fa-solid fa-x" id="delete-exer-btn"></i>
            <div id="modal-inner">
            
            </div>
        </div>
    </div>`

    document.getElementById('add-exer').addEventListener("click", newExercise)


}


function newExercise () {
    const modal = document.getElementById('modal')
    let modalInner = document.getElementById('modal-inner')
    
    if (window.getComputedStyle(modal).display === 'none'){
        modal.style.display = 'flex'

        modalInner.innerHTML = `
                <h2>Add new exercise</h2>
                <p>Create a new exercise to track your progress</p>

                <div class='form'>
                    <label for="exercise-name">Exercise name</label>
                    <input type="text" id="exercise-name" placeholder="Lat-pulldown" required>
                    <label for="goal">Goal</label>
                    <input type="text" id="goal" placeholder="e.g., 3-4 sets progressive overload">
                    <button id="submit">+ Add Exercise</button>
                </div>
                `
    }

    document.getElementById('delete-exer-btn').addEventListener("click", function() {
        modal.style.display = 'none'
    })

    document.getElementById('submit').addEventListener('click', addMainExer)

}

function addMainExer() {
    let mainExer = document.getElementById('main-exercise') 
    const exerciseName = document.getElementById('exercise-name')
        
    if(window.getComputedStyle(modal).display === 'flex' && exerciseName.value) {
        modal.style.display = 'none'
        mainExer.innerHTML += `<div>
            <h1>${exerciseName.value}</h1>
            <div class='exercise-name-main' id='exercise-name-main'></div>
            <div class='modal2inner' id='modal2inner'>
            </div>
            <button id='add-set'>+ Add set</button>
        </div>` 
    }
    document.getElementById('add-set').addEventListener("click", addSet)
}

function addSet() {
    const modal2inner = document.getElementById('modal2inner')
    if (window.getComputedStyle(modal2inner).display === 'none'){
        modal2inner.style.display = 'flex'
        modal2inner.innerHTML = ` <div>
                    <div class='form'>
                        <label for="weight">Weight (kg)</label>
                        <input type="number" id="weight" placeholder="60" required>
                        <label for="reps">Reps</label>
                        <input type="number" id="reps" placeholder="6">
                    </div>
                    <div>
                        <button id="add-set-submit" class='add-set-submit'>+ Add Set</button>
                        <button id="cancel">Cancel</button>
                    </div>
                </div>`
        const weight = document.getElementById('weight')
        const reps = document.getElementById('reps')
        
    }

    document.getElementById('add-set-submit').addEventListener('click', addSetSubmit)

    document.getElementById('cancel').addEventListener('click', function() {
        modal2inner.style.display = 'none'
    })
}

function addSetSubmit() {
    let exerciseNameMain = document.getElementById('exercise-name-main')
    if(window.getComputedStyle(modal2inner).display === 'flex' && weight.value && reps.value){
        modal2inner.style.display = 'none'
        exerciseNameMain.innerHTML += `<div class='weight-reps'>
            <div class='display-weight-rep'>
                <p>set1</p>
                <h3>${weight.value}X${reps.value}</h3>
            </div>
            <div class='display-weight-rep'>
                <p>kg</p>
                <p>${weight.value}</p>
                <p>reps</p>
                <p>${reps.value}</p>
            </div>
        </div>`
    }
}