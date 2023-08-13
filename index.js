const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task');
    taskItem.innerHTML = `
      <span>${taskText}</span>
      <button class="doneButton">&#10003;</button>
      <button class="deleteButton">&#x2715;</button>
    `;
    taskList.appendChild(taskItem);

    taskInput.value = '';
    taskInput.focus();

    const deleteButton = taskItem.querySelector('.deleteButton');
    deleteButton.addEventListener('click', () => {
      taskItem.remove();
    });

    const doneButton = taskItem.querySelector('.doneButton');
    doneButton.addEventListener('click', () => {
      taskItem.classList.toggle('done');
    });
  }
}
