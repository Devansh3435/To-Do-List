// Function to toggle task status and delete the task
function toggleTaskStatus() {
  const taskItem = this.parentNode;
  taskItem.classList.toggle('completed');

  // Check if the checkbox is checked
  if (this.checked) {
    // Add shrinking animation to the task item
    taskItem.style.animation = 'shrink 0.5s forwards';

    // Remove the task item from the task list after the animation ends
    setTimeout(() => {
      taskItem.remove();
    }, 500);
  }
}

// Function to add a new task
function addTask() {
  // Get the task name from the input field
  const taskName = taskInput.value.trim();

  // Create a new task item element
  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item');

  // Create checkbox and label elements for the task
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', toggleTaskStatus);

  const label = document.createElement('label');
  label.textContent = taskName;

  // Append checkbox and label to the task item
  taskItem.appendChild(checkbox);
  taskItem.appendChild(label);

  // Append the task item to the task list
  taskList.appendChild(taskItem);

  // Clear the input field
  taskInput.value = '';

  // Add the 'complimentary' class to the task item
  taskItem.classList.add('complimentary');
}

// Get the task list, task input, and add button elements
const taskList = document.getElementById('task-list');
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');

// Add event listener to the add button
addButton.addEventListener('click', addTask);
