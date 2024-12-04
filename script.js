// Fetching the elements from HTML
const inputField = document.querySelector("#inputField");
const addButton = document.querySelector("#addButton");
const todoList = document.querySelector("#todoList");

// Registers when button is clicked and activates a function.
addButton.addEventListener("click", function (){
    console.log("Knappen er trykket!");

    // Creating a variable storing the value of another variable
    // Taking the global variable inputField and using the method .value to fetch a value stored in a new variable
    const inputFieldValue = inputField.value;
    console.log(inputFieldValue);

    // Creates a new Element to the list with the content from input after button press.
    const todoItem = document.createElement("li");
    todoItem.textContent = inputFieldValue;
    todoList.appendChild(todoItem);
});