// Select the form and task list elements
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

// Add an event listener for the form submit event
taskForm.addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent form from reloading the page

  // Get the value of the new task from the input field
  const taskInput = document.getElementById('new-task');
  const taskText = taskInput.value;

  if (taskText.trim() === '') {
    return; // Don't add empty tasks
  }

  // Create a new list item (li) element
  const newTask = document.createElement('li');

  // Create a span to hold the task text
  const taskContent = document.createElement('span');
  taskContent.textContent = taskText;

  // Create a checkbox to mark the task as completed
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', function() {
    taskContent.classList.toggle('completed');
  });

  // Create a delete button (cross icon) to remove the task
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  deleteBtn.addEventListener('click', function() {
    taskList.removeChild(newTask);
  });

  // Append the checkbox, task content, and delete button to the new task (li)
  newTask.appendChild(checkbox);
  newTask.appendChild(taskContent);
  newTask.appendChild(deleteBtn);

  // Add the new task to the task list (ul)
  taskList.appendChild(newTask);

  // Clear the input field after the task is added
  taskInput.value = '';
});
