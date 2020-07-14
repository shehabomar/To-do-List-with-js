//setting up variables
let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer= document.querySelector(".tasks-content");
let noTasksMsg = document.querySelector(".no-tasks-message");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");


window.onload = function() {
    theInput.focus();
};

theAddButton.onclick = function(ev){
    if(theInput.value ===''){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Enter Your Task!',
            footer: '<a href>Why do I have this issue?</a>'
          })
    }else{
        let noTasksMsg = document.querySelector(".no-tasks-message");
        //check if span is exeste
        if(document.body.contains(document.querySelector(".no-tasks-message"))){
            noTasksMsg.remove();
        }
        let mainSpan=document.createElement('span');
        let deleteElement=document.createElement('span');
        let text=document.createTextNode(theInput.value);
        let deleteText =document.createTextNode("Delete");
        mainSpan.appendChild(text);
        mainSpan.className="task-box";
        deleteElement.appendChild(deleteText);
        deleteElement.className="delete";
        mainSpan.appendChild(deleteElement);
        tasksContainer.appendChild(mainSpan);
        theInput.value="";
        theInput.focus();
        calculateTasks();
        theInput.focus();
        theAddButton.onclick= function(){
            if(theInput.value === document.getElementById('task-box').innerText){
                ev.preventDefault();
                theInput.value.remove();
            }
        }
    }
}

document.addEventListener("click" , function(e){

     if(e.target.className=="delete"){
        
        e.target.parentNode.remove();

        if(tasksContainer.childElementCount==0){
            createNoTasks();    
        }
     
    }
    if(e.target.classList.contains("task-box")){
        
        e.target.classList.toggle("finished"); 
    }
    calculateTasks()
})
function createNoTasks(){
    
    let msgSpan=document.createElement("span");
    
    let msgText =document.createTextNode("No Tasks To Show");
    
    msgSpan.appendChild(msgText);

    msgSpan.className='no-tasks-message';

    tasksContainer.appendChild(msgSpan);
}

function calculateTasks() {
    tasksCount.innerHTML=document.querySelectorAll('.tasks-content .task-box').length;
    tasksCompleted.innerHTML=document.querySelectorAll('.tasks-content .finished').length;
}


