var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    // prevents browser from disrupting task entry with refresh
    event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.classList = "task-item";
    listItemEl.textContent = "Sleep";

    tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);