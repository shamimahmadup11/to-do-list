const inputValue=document.getElementById("Input");
const submitBtn=document.getElementById("submitBtn");
const taskList=document.querySelector(".taskList");

submitBtn.addEventListener("click", function(){
    if(!inputValue.value){
        alert("you must write something !")
    }else{
        let valueOfInput=inputValue.value;
        let listTag=document.createElement("li")
        taskList.appendChild(listTag);
        listTag.textContent=valueOfInput
        let spanTag=document.createElement("span");
        spanTag.innerHTML="\u00d7"
        listTag.appendChild(spanTag);
    }
    inputValue.value="";
    saveData()
})


taskList.addEventListener("click", function(e){
  if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked")
    saveData()
  }else{
    e.target.parentElement.remove();
    saveData()
  }
},false)

function saveData(){
    localStorage.setItem("data", taskList.innerHTML)
}
function showTask(){
    taskList.innerHTML=localStorage.getItem("data")
}
showTask();