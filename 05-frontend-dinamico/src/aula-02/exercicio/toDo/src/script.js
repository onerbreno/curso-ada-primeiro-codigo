const form = document.forms["todo-form"]

function createTaskElement(taskTitle) {
  const task = document.createElement("li")
  task.classList.add("task-item")
  
  const id = Date.now()
  task.dataset["id"] = id

  const taskText = document.createElement("p")
  taskText.innerHTML = taskTitle
  
  const taskButton = document.createElement("input")
  taskButton.type = "checkbox"
  taskButton.addEventListener("change", () => {
    if (taskButton.checked) {
      taskText.style.textDecoration = "line-through"
    } else {
      taskText.style.textDecoration = "none"
    }
  })


  task.append(taskText, taskButton)
  
  updateTaskList(task)
}

function updateTaskList(task) {
  const tasksList = document.querySelector('.task-list')
  
  tasksList.append(task)
  
}

function addNewTask(taskTitle) {
  createTaskElement(taskTitle)
}

function toggleCompleteTask() {}

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const taskTitle = form.elements["task-name"].value 

  addNewTask(taskTitle)
})
