const addButton = document.querySelector('.add');

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

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-button"
      >Delete</button>
    `;
    todoListHTML += html;
  })

  document.querySelector(".js-list")
    .innerHTML = todoListHTML;

    document.querySelectorAll('.delete-button')
      .forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
          todoList.splice(index, 1);
          renderTodoList();
        })
      })
}

addButton.addEventListener('click', () => {
  addTask();
})

document.querySelectorAll('.delete-button')
  .forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderTodoList();
    });
  });

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

