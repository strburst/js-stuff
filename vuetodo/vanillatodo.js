const newTodos = document.getElementById('newTodos');
var todoList = document.getElementById('todoList');
const headerCount = document.getElementById('headerCount');

const raw = localStorage.getItem('todos');
var todoData = raw ? JSON.parse(raw) : [];
var changeFlag = false;

/**
 * Redraw the todo list completely from todoData.
 */
function redrawTodoList() {
  headerCount.textContent = todoData.length;
  newTodoList = document.createElement('ol');
  for (const item of todoData) {
    li = document.createElement('li');
    li.textContent = item.text;
    li.onclick = completeHandler;

    if (item.completed) {
      li.setAttribute('class', 'completed');
    }

    newTodoList.appendChild(li);
  }
  todoList = todoList.parentNode.replaceChild(newTodoList, todoList);

  if (changeFlag === true) {
    document.getElementById('save').removeAttribute('disabled');
  } else {
    document.getElementById('save').setAttribute('disabled', 'disabled');
  }
}

function completeHandler(evt) {
  node = evt.srcElement;
  text = node.textContent;

  for (var i = 0; i < todoData.length; i++) {
    if (todoData[i].text === text) {
      todoData[i].completed = !todoData[i].completed;
      changeFlag = true;
      redrawTodoList();
      break;
    }
  }
}

function clearCompleted() {
  todoData = todoData.filter((elem) => {
    return !elem.completed;
  });

  changeFlag = true;
  redrawTodoList();
}

function save() {
  localStorage.setItem('todos', JSON.stringify(todoData));
  changeFlag = false;
  redrawTodoList();
}

function deleteAll() {
  todoData = [];
  changeFlag = true;
  redrawTodoList();
}

document.getElementById('clearCompleted').onclick = clearCompleted;
document.getElementById('save').onclick = save;
document.getElementById('deleteAll').onclick = deleteAll;

newTodos.onkeypress = function(evt) {
  if (evt.charCode === 13 && newTodos.value !== '') {
    // Add a new item to the todoList
    todoData.push({text: newTodos.value, complete: false});
    newTodos.value = '';
    changeFlag = true;
    redrawTodoList();
  }
};

headerCount.textContent = todoData.length;

redrawTodoList();
