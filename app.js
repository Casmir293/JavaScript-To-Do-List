let task = document.getElementById("task");
let myTask = document.querySelector(".myTask");
let addTaskBtn = document.getElementById("addTaskBtn");
let theContainer = document.getElementById("theContainer");
let taskParent = document.getElementById("taskParent");

myTask.style.display = "none";

theEvent = () => {
  if (task.value !== "") {
    let newLine = myTask.cloneNode(true);
    newLine.querySelector("label").textContent = task.value;
    taskParent.appendChild(newLine);
    task.value = "";
    newLine.style.display = "block";
  }
};

task.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    theEvent();
  }
});

theRemoveEvent = (button) => {
  button.closest(".myTask").remove();
};
