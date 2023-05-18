document.addEventListener('DOMContentLoaded', loadTasks);

function loadTasks() {
  const tasks = getTasksFromStorage();
  const taskList = document.getElementById('taskList');

  tasks.forEach(function(task) {
    createTaskElement(taskList, task);
  });
}

function getTasksFromStorage() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  return tasks;
}

function saveTasksToStorage(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const task = {
      text: taskText,
      completed: false
    };

    const taskList = document.getElementById('taskList');
    createTaskElement(taskList, task);

    const tasks = getTasksFromStorage();
    tasks.push(task);
    saveTasksToStorage(tasks);

    taskInput.value = '';
  }
}

function createTaskElement(taskList, task) {
  const taskItem = document.createElement('li');

  const taskText = document.createElement('span');
  taskText.innerText = task.text;
  if (task.completed) {
    taskText.classList.add('completed');
  }
  taskText.addEventListener('click', function() {
    toggleTaskCompletion(taskItem, task);
  });
  taskItem.appendChild(taskText);

  const editButton = document.createElement('button');
  editButton.innerText = 'Editar';
  editButton.classList.add('edit-button');
  editButton.addEventListener('click', function() {
    editTask(taskItem, task);
  });
  taskItem.appendChild(editButton);

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Eliminar';
  deleteButton.classList.add('delete-button');
  deleteButton.addEventListener('click', function() {
    deleteTask(taskItem, task);
  });
  taskItem.appendChild(deleteButton);

  taskList.appendChild(taskItem);
}

function toggleTaskCompletion(taskItem, task) {
  const taskText = taskItem.querySelector('span');
  task.completed = !task.completed;
  if (task.completed) {
    taskText.classList.add('completed');
  } else {
    taskText.classList.remove('completed');
  }
  const tasks = getTasksFromStorage();
  saveTasksToStorage(tasks);
}

function editTask(taskItem, task) {
  const newTaskText = prompt('Editar tarea:', task.text);
  if (newTaskText !== null) {
    task.text = newTaskText.trim();
    taskItem.querySelector('span').innerText = task.text;
    const tasks = getTasksFromStorage();
    saveTasksToStorage(tasks);
  }
}

function deleteTask(taskItem, task) {
  taskItem.remove();
  const tasks = getTasksFromStorage();
  const taskIndex = tasks.findIndex(function(element) {
    return element.text === task.text;
  });
  tasks.splice(taskIndex, 1);
  saveTasksToStorage(tasks);
}
