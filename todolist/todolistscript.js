let task=document.getElementById("task");
let taskList=document.querySelector(".task-list");

function addTask(){
    let newTask=task.ariaValueMax;
    if (newTask!="") {
        let li=document.createElement("li");
        li.innerHTML=newTask;
        span.innerHTML="❌";
        li.appendChild(span);
        taskList.appendChild(li);
        console.log(newTask)        
    }
    else{
        alert("Ebter a task")
    }
    saveData();
    task.value="";
}
taskList.addEventListener("click",function(event){
    if (event.target.tagName=="LI") {
        event.target.classList.toggle
        
    }
}