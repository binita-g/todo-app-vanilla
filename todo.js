// Add new task by creating a new list item and displaying it on the page.
function addTask() {
    // Read the user input.
    var input = document.querySelector("#inputField").value;

    if (input.length > 0) {
        // If the input is not empty, create a list item for the new task.
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input));

        // Display the task in the list.
        document.querySelector("#tasksList").appendChild(li);

        // Reset the input field to empty.
        document.querySelector("#inputField").value = "";

        /* Add event listener for each new list item so that when a task is clicked, it is struck through, and 
        when it is unclicked, it returns to gray. */ 
        li.addEventListener('click', function(e) {
            e.target.classList.toggle('clicked');
        });
    }
}

// Add event listener on page init.
function init() {
    // Add new task not only if the "Add" button is clicked, but also if the "Enter" button is clicked. 
    let input = document.querySelector("#inputField"); 
    input.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            addTask();
        }
    });
}

// Clear all existing tasks.
function clearAll() {
    let ul = document.querySelector("#tasksList");
    ul.innerHTML = "";
}

// Clear any completed tasks by removing any items with the "clicked" class on it.
function clearCompleted() {
    let ul = document.querySelector("#tasksList");
    const items = ul.querySelectorAll("li");
    items.forEach(function(item) {
        if (item.classList.contains("clicked")) {
            item.remove();
        }
    });
}