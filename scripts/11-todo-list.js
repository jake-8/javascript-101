
const todoList = [{
  name: 'work', 
  dueDate: '2022-12-22'
},{
  name: 'code',
  dueDate: '2022-12-22'
},{
  name: 'sleep',
  dueDate: '2022-12-22'
}
]
renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      ">Delete</button>
    `;
    todoListHTML += html;
  }

  document.querySelector(".js-list").innerHTML = todoListHTML;
}

function addTask() {
  const inputText = document.querySelector(".js-text-input");
  const name = inputText.value;

  const dateInputElement = document.querySelector(".js-date-input");
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate
    name,
    dueDate
  });


  inputText.value = '';

  renderTodoList();
}

