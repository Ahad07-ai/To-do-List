const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a task
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // "×" character
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// Event listener for clicks on the list container
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Save the current list to local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Load tasks from local storage and display them
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || ""; // Default to an empty string if nothing is stored
}

// Call showTask when the page loads
window.onload = showTask;
