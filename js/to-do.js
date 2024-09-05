const toDoForm = document.querySelector(".to-do-form");
const toDoFormInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".to-do-list");
const TO_DOS_KEY = "todos";

let toDos = [];
const savedToDos = localStorage.getItem(TO_DOS_KEY);

function saveToDos() {
  localStorage.setItem(TO_DOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newToDo) {
  toDoLi.id = newToDo.id;
  const toDoLi = document.createElement("li");
  const toDoBtn = document.createElement("button");
  const toDoSpan = document.createElement("span");
  toDoBtn.innerText = "X";
  toDoBtn.addEventListener("click", deleteTodo);
  toDoSpan.innerText = newToDo.text;
  toDoLi.appendChild(toDoBtn);
  toDoLi.appendChild(toDoSpan);
  toDoList.appendChild(toDoLi);
}

function deleteTodo(event) {
  const deleteTarget = event.target.parentElement;
  deleteTarget.remove();
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoFormInput.value;
  toDoFormInput.value = "";

  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };

  toDos.push(newToDoObj);
  saveToDos();
  paintToDo(newToDoObj);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

if (savedToDos !== null) {
  //show To-Do List
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
} else {
  //show greeting
  paintToDo(newToDo);
}
