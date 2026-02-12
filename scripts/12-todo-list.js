const todoList = [{
    name:'Luffy wakeup', 
    dueDate:'2025-12-22'
}, {
    name:'Zoro wakeup',
   dueDate:'2025-12-22'
}];

renderTodoList();

function renderTodoList(){

let todoListHtml ='';

todoList.forEach( (todoobject, index) => {
    const {name,dueDate} = todoobject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="todo-delete js-delete-todo-button" >Delete</button>`;
    todoListHtml += html;
})


document.querySelector('.js-todo-list').innerHTML = todoListHtml;

document.querySelectorAll('.js-delete-todo-button')
    .forEach((deletebutton, index) =>{
    deletebutton.addEventListener('click', () =>{
     todoList.splice(index,1);
     renderTodoList();
});
});

}


document.querySelector('.js-todo-button')
.addEventListener('click', () => {
    addTodo();
});

function addTodo() {
   const inputElement = document.querySelector('.js-name-input');
   const name = inputElement.value;

   const dateinputElement = document.querySelector('.js-due-date-input');
   const dueDate = dateinputElement.value;

   todoList.push({
    name,
    dueDate});
 

   inputElement.value = '';

   renderTodoList();
}