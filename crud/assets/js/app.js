import { getAllUsers, getTasks, getTask, deleteTask } from "./petitions.js";

// const select = document.querySelector(".");
const filas = document.querySelector(".filas");
const select = document.querySelector("#users");
const listUsers = document.querySelector("#users");
const form = document.querySelector("#form-task");
const title = document.querySelector("#title");
const formTitle = document.querySelector("#form-title");
const description = document.querySelector("#description");
const botonCancel = document.querySelector("#boton-cancel");
let taskId = 0;
let update = false;

document.addEventListener('DOMContentLoaded', async () => {
  title.value = "";
  description.value = "";
  const users = await getAllUsers();
  let template = listUsers.innerHTML;
  for (const user of users) {
    template += `<option value="${user.id}">${user.fullname}</option>`;
  }
  listUsers.innerHTML = template;
});

document.addEventListener('click', async (e) => {
  if (e.target.id == 'update' || e.target.parentElement.id == 'update') {
    botonCancel.classList.remove('hidden');
    formTitle.innerHTML = "Edit task";
    const parent = e.target.id == 'update' ? e.target.parentElement.parentElement : e.target.parentElement.parentElement.parentElement;
    taskId = parent.getAttribute('taskId');
    const task = await getTask(taskId);
    title.value = task.title;
    description.value = task.description;
    update = true;
  }
  if (e.target.id == 'boton-delete' || e.target.parentElement.id == 'boton-delete') {
    const parent = e.target.id == 'boton-delete' ? e.target.parentElement.parentElement : e.target.parentElement.parentElement.parentElement;
    taskId = parent.getAttribute('taskId');
    fetch(`/crud/api/deleteTask.php?id=${taskId}`).then(async (resp) => {
      const tasks = await getTasks(select.value);
      printTasks(tasks);
      title.value = "";
      update = false;
      formTitle.innerHTML = "Insert Task";
    })
  }
})


select.addEventListener("change", async (e) => {
  formTitle.innerHTML = "Insert Task";
  title.value = "";
  description.value = "";
  botonCancel.classList.add('hidden');
  update = false;
  const tasks = await getTasks(e.target.value);
  printTasks(tasks);
})

botonCancel.addEventListener('click', e => {
  formTitle.innerHTML = "Insert Task";
  title.value = "";
  description.value = "";
  botonCancel.classList.add('hidden');
  update = false;

})



form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (taskId != null && title.value != null && title.value != "" && select.value != null) {
    
    const data = {
      id: `${taskId}`,
      title: `${title.value}`,
      idUser: `${select.value}`,
      description: `${description.value}`
    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    const url = update ? '/crud/api/updateTask.php' : '/crud/api/createTask.php';
    fetch(url, options).then(async (resp) => {
      const tasks = await getTasks(select.value);
      printTasks(tasks);
      title.value = "";
      description.value = "";
      update = false;
      formTitle.innerHTML = "Insert Task";
    });
  }
})


function printTasks(tasks) {
  filas.innerHTML = "";
  tasks.forEach(element => {
    filas.innerHTML += `<tr taskId=${element.id}>
    <td>${element.id}</td>
    <td>${element.firstname}</td>
    <td>${element.title}</td>
    <td>Lorem ipsum dolor .</td>
    <td>
      <button id="update" class="btn btn-secondary btn-sm">
        <span>Update</span> <i class="nf nf-md-pencil"></i>
      </button>
      <button id="boton-delete" taskId=${element.id} id="delete" class="btn btn-danger btn-sm">
        <span>Delete</span> <i class="nf nf-cod-trash"></i>
      </button>
    </td>
  </tr>`;
  });
}