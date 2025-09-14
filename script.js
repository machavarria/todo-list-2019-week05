const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  // Add task using short innerHTML string
  taskList.innerHTML += '<li><input type="checkbox"><span>' + taskText + '</span><button class="delete-btn">Delete</button></li>';

  taskInput.value = "";

  const lastTask = taskList.lastElementChild;
  const checkbox = lastTask.querySelector("input");
  const deleteBtn = lastTask.querySelector(".delete-btn");

  checkbox.addEventListener("change", () => lastTask.classList.toggle("done", checkbox.checked));
  deleteBtn.addEventListener("click", () => lastTask.remove());
}

addBtn.addEventListener("click", addTask);