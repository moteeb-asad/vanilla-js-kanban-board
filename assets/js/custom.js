// Global Variables

let boardTasks = [];

/////////////////////////////////////////////////
////// LOAD JSON DATA //////////////
/////////////////////////////////////////////////

function loadData() {
  fetch("assets/js/dummy.json")
    .then((response) => response.json())
    .then((data) => {
      boardTasks = data;
      console.log(boardTasks);
    })
    .catch((error) => console.error("Error loading data:", error));
}

// document.addEventListener('DOMContentLoaded',function(){

//     let draggables = document.querySelectorAll('.draggable');

//     draggables.forEach(draggable => () => {
//         console.log("Testing", draggable);
//     })

// });

/////////////////////////////////////////////////
////// APPEND TASKS TO BOARD //////////////
/////////////////////////////////////////////////

function appendTasksToBoard(boardTasks) {
  let board = document.getElementById("board");

  boardTasks.forEach((task) => {
    let taskCard = document.createElement("div");
    taskCard.classList.add("task-card");
    taskCard.innerHTML = task.title;

    board.appendChild(taskCard);
  });
}

/////////////////////////////////////////////////
////// INITIALIZATION //////////////
/////////////////////////////////////////////////

loadData();
appendTasksToBoard(boardTasks);
