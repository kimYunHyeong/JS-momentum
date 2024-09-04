const toDoForm = document.querySelector(".to-do-form");
const toDoFormInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".to-do-list");

function paintToDo(newToDo) {
  const toDoLi = document.createElement("li");
  const toDoBtn = document.createElement("button");
  const toDoSpan = document.createElement("span");
  toDoBtn.innerText = "X";
  toDoBtn.addEventListener("click", deleteTodo);
  toDoSpan.innerText = newToDo;
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
  paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
