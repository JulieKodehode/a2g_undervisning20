// Fetching the elements from HTML
const inputField = document.querySelector("#inputField");
const addButton = document.querySelector("#addButton");
const todoList = document.querySelector("#todoList");

// Registers when button is clicked and activates a function.
addButton.addEventListener("click", function (){
    console.log("Legg til knappen er trykket!");

    // Creating a variable storing the value of another variable
    // Taking the global variable inputField and using the method .value to fetch a value stored in a new variable
    const inputFieldValue = inputField.value;
    console.log(inputFieldValue);

    // Creates a new Element to the list with the content from input after button press.
    const todoItem = document.createElement("li");
    todoItem.textContent = inputFieldValue;
    todoList.appendChild(todoItem);

    // Explain what happens on the next lines
    const finishedButton = document.createElement("button");
    finishedButton.textContent = "Ferdig";
    todoItem.appendChild(finishedButton);
    finishedButton.addEventListener("click", function () {
        console.log("Ferdig knappen er trykket!");

        // Use an if/else statement here: to check if the element have this styling or not to toggle it on and off.
        todoItem.style.textDecoration = "line-through";
    });

    // Explain what happens on the next lines
    const removeButton = document.createElement("button");
    removeButton.textContent = "Slett";
    todoItem.appendChild(removeButton);
    removeButton.addEventListener("click", function () {
        console.log("Slett knappen er trykket!");

        // Use an if/else statement here: to check if the element have the styling for finished or not before possible to delete.
        todoItem.remove();
    });
});