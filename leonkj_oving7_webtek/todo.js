// Create empty array of all todos
const tasks = [];

// Object constructor for todoItem
function todoItem (task) {
  this.task = task;
  this.timestamp = Date.now();
}

/* ---------------------------------------------------
 *
 * Function that adds a new task
 * Invoked by clicking the new-todo button
 *
 * --------------------------------------------------- */
function addTask() {
  // get value of the input field
  const newTodoTextField = document.getElementById('todo-text');
  const task = newTodoTextField.value;

  // check if the user has entered a task
  const taskIsSet = task !== '';

  // don't execute the rest of the function if the user has not entered a task
  if (!taskIsSet) {return;}

  // get number of tasks, and create uique task id
  // Naive implementation, should be improved
  const taskId = 'task-' + tasks.length;

  // Create new todolist element
  createTodoListElement(task, taskId);

  // Create new todoItem Object
  // and push it to the start of the tasks array (to keep list and array the same)
  const newTodoItem = new todoItem(task);
  tasks.unshift(newTodoItem);

  // Clear the input field and set focus to it
  newTodoTextField.value = '';
  newTodoTextField.focus();
}

/* Helper method for addTask
 *
 * NOTE: this method adds event listeners to the checkbox elements
 * that calls the updateOutput method
 *
 */
function createTodoListElement (taskName, taskId){
  // Create references to the todoList
  const todoList = document.getElementById('todo-list');

  // create new list element
  const tempTaskItem = document.createElement('LI');

  // create new checkbox
  const tempTaskCheckbox = document.createElement('input');
  tempTaskCheckbox.type = 'checkbox';
  tempTaskCheckbox.name = taskId;
  tempTaskCheckbox.id = taskId;
  tempTaskCheckbox.className = 'task-item'; // used to get the number of checked items

  // add event listener for the checkbox
  tempTaskCheckbox.addEventListener('click', updateOutput);

  // add checkbox to list element
  tempTaskItem.appendChild(tempTaskCheckbox);

  // create new label
  const tempTaskText = document.createTextNode(taskName);
  const tempTaskLabel = document.createElement('label');
  tempTaskLabel.htmlFor = taskId;
  tempTaskLabel.appendChild(tempTaskText);

  // add label to list element
  tempTaskItem.appendChild(tempTaskLabel);

  // add list element element to beginning of list
  todoList.insertBefore(tempTaskItem, todoList.firstChild);
}

/* ---------------------------------------------------
 *
 * Function that updates the output text
 * Invoked by clicking the new-todo button and by clicking a checkbox
 *
 * --------------------------------------------------- */
function updateOutput() {
  // reference to target element
  const outputElement = document.getElementById('todo-output');

  // Check if there is added tasks, or if all tasks are completed
  const noTodosAdded = getNumberOfTodos() === 0;
  const allTodosCompeted = getNumberOfDoneTodos() === getNumberOfTodos();

  // Display special message if there is nothing to do
  if (noTodosAdded || allTodosCompeted) {
    outputElement.innerHTML = "You've got nothing to do! Add tasks, or call it a day.";
    return;
  }

  // update output with number of tasks left to do
  outputElement.innerHTML = getNumberOfDoneTodos() + '/' + getNumberOfTodos() + ' tasks completed.';
}

// Helper method for updateOutput
function getNumberOfTodos() {
  return document.getElementsByClassName('task-item').length;
}

// Helper method for updateOutput
function getNumberOfDoneTodos(){
  // get all checkbox items in an array
  const checkboxElements = document.getElementsByClassName('task-item');

  // count number of checked elements
  var completedTodos = 0;

  for (let i = 0; checkboxElements[i]; i++) {
    if (checkboxElements[i].checked) {
      completedTodos++;
    }
  }

  return completedTodos;
}

/* ---------------------------------------------------
 *
 * Add an event listener for the new tood button
 * When clicked, prevent form submission, call the addTask-method, and update the output field
 *
 * --------------------------------------------------- */

// Reference to the add task-button
const newTodoButton = document.getElementById('todo-button');

newTodoButton.addEventListener('click', function(e){
  e.preventDefault();
  addTask();
  updateOutput();
});

/* ---------------------------------------------------
 *
 * Cal the updateOutput method on load
 *
 * --------------------------------------------------- */
 updateOutput();
