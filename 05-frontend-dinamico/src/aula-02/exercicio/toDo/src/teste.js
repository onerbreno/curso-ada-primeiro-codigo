const form = document.forms["todo-form"]
const TASKS_KEY = "@tasks"

function getLocalStorageTasks() {
  return JSON.parse(localStorage.getItem(TASKS_KEY) || "[]")
}

function createTaskElement(taskTitle) {
  const task = document.createElement("li")
  task.classList.add("task-item")
  
  const taskText = document.createElement("p")
  taskText.innerHTML = taskTitle
  
  const taskButton = document.createElement("input")
  taskButton.type = "checkbox"
  
  task.append(taskText, taskButton)
  
  return task
}

function updateTaskList() {
  const tasksList = document.querySelector('.task-list')
  
  const tasksItems = tasksList.querySelectorAll("li") || []
  tasksList.removeChild(...tasksItems)
  
  const tasks = getLocalStorageTasks()
  const tasksElements = tasks.map(task => {
    return createTaskElement(task.title)
  });
  tasksList.append(...tasksElements)
  
}

function addNewTask(taskTitle) {
  const tasks = getLocalStorageTasks()

  const newTask = {
    id: Date.now(),
    title: taskTitle,
  }
  
  localStorage.setItem("@tasks", JSON.stringify([...tasks, newTask]))
  updateTaskList()
}

document.body.addEventListener("load", updateTaskList())

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const taskTitle = form.elements["task-name"].value 

  addNewTask(taskTitle)
})
