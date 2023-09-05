

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value == "") {
    alert("You Must Write Something");
  } else {
    let li = document.createElement("li");
    li.innerText = inputBox.value;
    listContainer.appendChild(li);
    // add crros icon
    let span = document.createElement("span");
    // span.innerText="\u00d7";
    span.innerHTML=`<i class="fa-solid fa-trash"></i>`
    li.appendChild(span);
  }
  inputBox.value = " ";  // errase box context

  saveData(); // save content in browser
}

listContainer.addEventListener("click",function(e){
   
     if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showList(){
    listContainer.innerHTML= localStorage.getItem("data");
}
showList();