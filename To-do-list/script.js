const inputBox = document.querySelector("#input");
const listitem=document.querySelector("#tasklist");

function addTask(){
    if(inputBox.value === ''){
        alert("Please write a task!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value.trim();
        listitem.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);


    }
    inputBox.value='';
    saveData();
}

 listitem.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
 },false);


 function saveData(){
    localStorage.setItem("data",listitem.innerHTML);

 }
 function showData(){
    listitem.innerHTML=localStorage.getItem("data");
 }
 showData();