const addBtn = document.querySelector(".add-btn");
addBtn.addEventListener("click", addBtnClickHandler);

const todoTxtInput = document.querySelector(".todo-txt");

const todosList = document.querySelector(".todos-list");
todosList.addEventListener("click", todoListClickHandler);

const deleteBtn = document.querySelector(".delete-btn");
deleteBtn.addEventListener("click", deleteBtnClickHandler);

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
    if (elem.dataset.done === "true") elem.remove();
  }
}

function todoListClickHandler(e) {
  if (e.target.tagName === "LI") {
    if (!e.target.classList.contains("done")) {
      e.target.dataset.done = "true";
    } else e.target.dataset.done = "false";
    e.target.classList.toggle("done");
  }
}
