document.addEventListener('DOMContentLoaded',function(){

    let draggables = document.querySelectorAll('.draggable');

    draggables.forEach(draggable => () => {
        console.log("Testing", draggable);
    })


});


// let taskCard = document.getElementsByClassName('task-card');


// function toDo(){
//     console.log("Testing");

// }