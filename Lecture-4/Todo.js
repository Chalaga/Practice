const input = document.getElementById("todoInput");

let todo_Task = [];
function addtask() {
  todo_Task.push(input.value);
  localStorage.setItem('Tasks', input.value)
  const GetTodoTasks = localStorage.getItem('Tasks')

  todo_Task.forEach(() => {
    const ul = document.createElement("ul");
    const taskscontainer = document.querySelector(".listcontainer");
    taskscontainer.append(ul);
    ul.innerHTML = `
    <div class="listImgAndValueContainer">
    <img class="listimg" src="./Assets/Check.svg">
    <li>${GetTodoTasks}</li>
    </div>
    <img class="deletesvg" src="./Assets/Delete.svg">`;
    input.value = ''
  });
}

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    if (input.value === "") {
      alert('Input cannot be empty')
    } else {
      addtask();
    }
  }
});

// function Removetasks() {
//     const RemovedTasks = todo_Task.filter (Task => task !== `${}`)
// }


