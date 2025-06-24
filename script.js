const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('task-list');

addBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = taskText;
  li.appendChild(span);

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '🗑️';
  deleteBtn.addEventListener('click', () => li.remove());

  span.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);
  input.value = '';
}