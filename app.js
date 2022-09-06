const domModule = (() => {
  // refs
  const addBtn = document.getElementById("addBtn");
  const todoTxtInput = document.getElementById("todoTxt");
  const todosList = document.getElementById("todosList");
  const deleteBtn = document.getElementById("deleteBtn");

  // event listeners
  addBtn.addEventListener("click", addBtnClickHandler);
  deleteBtn.addEventListener("click", deleteBtnClickHandler);
  todosList.addEventListener("click", todoListClickHandler);

  // methods
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
})();
