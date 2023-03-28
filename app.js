// console.log('My Project')

// function sum(num1, num2) {
//     return num1 + num2
// }

// console.log('Hello World, I am learning git now')

// Implement the Add Todo feature

const inputText = document.querySelector("#inputText");
const addBtn = document.querySelector("#addBtn");
const displayResult = document.querySelector(".displayResult");

addBtn.addEventListener('click', addTodo)

function addTodo (e) {
    e.preventDefault()

    const id = displayResult.children.length + 1

    const item = inputText.value
    if (!item)
    return

    const newTodo = `<div class="displayTextResult" id="${id}">
    <li class="displayText">${item}</li>
    <button class="completeBtn" onclick="completeToDo(${id})">Complete</button>
    <button class="deleteBtn" onclick="deleteToDo(${id})">Delete</button>
</div>`

displayResult.innerHTML += newTodo

inputText.value = ""
}


function findToDo(id){
    return displayResult.children[id - 1]
}


function completeToDo(id){
    const toDoItem = findToDo(id)

    const itemSpan = toDoItem.firstElementChild
    itemSpan.toggleAttribute('done')

    const completeStatus = itemSpan.getAttribute('done') === null ? false : true

    const completeButton = toDoItem.children[1]
    completeButton.innerText = completeStatus ? 'Undo' : 'Complete'
}


function deleteToDo(id){
    const toDoItem = findToDo(id)

    toDoItem.classList.add('delete_todo')
}