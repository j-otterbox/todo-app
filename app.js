const todoTxtInput = document.querySelector(".todo-txt");

const addBtn = document.querySelector(".add-btn");
addBtn.addEventListener("click", addBtnClickHandler);

const deleteBtn = document.querySelector(".delete-btn");
deleteBtn.addEventListener("click", deleteBtnClickHandler);

const todosList = document.querySelector(".todos-list");
todosList.addEventListener("click", todoListClickHandler);

function addBtnClickHandler(e) {
  e.preventDefault();
  const todoTxt = todoTxtInput.value;

  // check for input
  if (todoTxt !== "") {
    const newListItem = document.createElement("li");
    newListItem.textContent = todoTxt;
    todoTxtInput.value = "";
    todosList.appendChild(newListItem);
  }
}

function deleteBtnClickHandler() {
  const listItems = Array.from(todosList.querySelectorAll("li"));
  for (const elem of listItems) {
    if (elem.classList.contains("done")) elem.remove();
  }
}

function todoListClickHandler(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");
  }
}
