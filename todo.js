// Add new task by creating a new list item and displaying it
function addTask() {
    var li = document.createElement("li");
    var input = document.querySelector("#inputField").value;
    li.appendChild(document.createTextNode(input));

    if (input.length > 0) {
      document.querySelector("#tasksList").appendChild(li);
    }

    document.querySelector("#inputField").value = "";
}