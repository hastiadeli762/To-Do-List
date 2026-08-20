let myAddButton =document.getElementById("addButton")
let myInput=document.getElementById("myInput")
let tasks=document.getElementById("tasks")


myAddButton.addEventListener("click", addToDo )
myInput.addEventListener("keydown" , (event)=>{
    if (event.key === "Enter"){
        addToDo()
    }
})

function addToDo(){
    let text=myInput.value;
    let element = document.createElement("li");
    let deleteElement = document.createElement("button")
    let completedElement = document.createElement("button")

    deleteElement.classList.add("delete-button");
    deleteElement.onclick = deleteTask;

    completedElement.classList.add("delete-button");
    completedElement.onclick = completeTask;


    element.textContent = text;
    tasks.appendChild(element);
    element.appendChild(deleteElement)
    element.appendChild(completedElement)
    myInput.value="";
    deleteElement.textContent= "delete";
    completedElement.textContent= "Completed";

}


function deleteTask(event) {
    event.target.parentElement.remove();
}
function completeTask(event) {
    event.target.parentElement.classList.toggle("completed");
}