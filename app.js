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
    span.innerText="\u00d7";
    li.appendChild(span);
  }
  inputBox.value = " ";  // errase box context
}
