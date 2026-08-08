let myAddButton =document.getElementById("addButton")
let myInput=document.getElementById("myInput")
let tasks=document.getElementById("tasks")


myAddButton.addEventListener("click", addToDo )

function addToDo(){
    let text=myInput.value;

    let element = document.createElement("li");
    element.textContent = text;

    tasks.appendChild(element);
    myInput.value="";





}