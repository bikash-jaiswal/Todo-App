// for dev tool testing
console.log('testing');

// localstorage
// let todosArray = [];
// local storage contains previous array the parse it else created new array
let todosArray = localStorage.getItem('todos')?JSON.parse(localStorage.getItem('todos')): [];
// use localstorage setItem() to set new item as tring with "JSON.stringify()"
localStorage.setItem('todos',JSON.stringify(todosArray));

// use JSON.parse() to converts strings of array fron localStorage
let storage = JSON.parse(localStorage.getItem('todos'));

const formField = document.querySelector("form");
const userInput = document.getElementById("user-input");
const addButton = document.getElementById("add-button")
const todoList = document.getElementById("list");
const reset = document.getElementById("clear")

// method to add new list at the end  
function addItem(text){
    const newItem = document.createElement('li');
    newItem.setAttribute('class', "todos");
    newItem.textContent = text;
    todoList.appendChild(newItem);
    

}
// removes all the item from todo list
reset.addEventListener('click', function(e){
    while(todoList.firstChild ){
        todoList.removeChild(todoList.firstChild);
    }
    // clear all the storage
    localStorage.clear()
});

// if add button is clicked it will add the item from input
addButton.addEventListener('click', function(e){
    e.preventDefault() //this will stop refreshing the page
    console.log(userInput.value);
    if (userInput.value !== ""){
        todosArray.push(userInput.value)
        localStorage.setItem('todos', JSON.stringify(todosArray))
        addItem(userInput.value);
        userInput.value = "";
    }
    
});

// Loop through storage when a user first opens a page and run the addItem function
function main(){
    for (let index = 0; index < storage.length; index++) {
        // const element = array[index];
        addItem(storage[index]);
        
    }
}

main();