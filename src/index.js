document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form')
  form.addEventListener("submit", e => {
    e.preventDefault()
    const eTarget = e.target
    const taskValue = eTarget.querySelector('#new-task-description').value
    const prioValue = eTarget.querySelector('#priority').value
    const dueDate = eTarget.querySelector('#due-date').value
    const newDate = new Date(dueDate)
    newTasker(taskValue, prioValue, newDate.toDateString())
    form.reset()
  }
  )
});

function newTasker(taskName, priority, dueDate){
  const newTask = document.createElement('p')
  if (dueDate === "Invalid Date") {newTask.textContent =`${taskName}, no due date! `}
  else{newTask.textContent = `${taskName}, due ${dueDate} `}
  switch (priority) {
    case 'high': newTask.style.color = "red"
    break;
    case 'medium' : newTask.style.color = "#FFFF00"
    break;
    case 'low' : newTask.style.color = "green"
    break;
    case "no": newTask.style.color = "white"
    break;
    
  }
  const deleteButton = document.createElement('button')
  deleteButton.innerText = "x"
  deleteButton.addEventListener("click", () =>{
    deleteButton.parentNode.remove()
  })
  newTask.appendChild(deleteButton)
  document.querySelector(`#${priority}_priority`).appendChild(newTask)

}
