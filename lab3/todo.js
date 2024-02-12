document.getElementById('addBtn').addEventListener('click', function() {
    var taskInput = document.getElementById('taskInput').value;

    // Create a new div element for the box
    var newBox = document.createElement('div');
    newBox.id = 'boxContainer'; // Set the id to 'boxContainer'

    // Create elements for the new box
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox';

    var taskParagraph = document.createElement('p1');
    taskParagraph.id = 'task';
    taskParagraph.textContent = taskInput;

    var deleteIcon = document.createElement('i');
    deleteIcon.className = 'fa fa-trash-o';

    // Append elements to the new box
    newBox.appendChild(checkbox);
    newBox.appendChild(taskParagraph);
    newBox.appendChild(deleteIcon);

    // Append the new box directly to the existing #box container
    document.getElementById('box').appendChild(newBox);

    if (!taskInput.trim()) {
        // Display an alert or handle it in a way you prefer
        alert("Please enter a task before adding!");
         // Stop execution if taskInput is empty
    }
    else{
    document.getElementById('taskInput').value = '';
    }
});





function handleDeleteTask(event) {
    var deleteIcon = event.target;
    var taskContainer = deleteIcon.parentNode;

    // Remove the task container from its parent
    taskContainer.parentNode.removeChild(taskContainer);
}


document.addEventListener('click', function(event) {
    if (event.target.classList.contains('fa-trash-o')) {
        handleDeleteTask(event);
    }
});




// Function to handle checkbox check event
function handleCheckboxCheck(event) {
    var checkbox = event.target;
    var taskParagraph = checkbox.nextElementSibling; // Assuming the structure remains the same

    if (checkbox.checked) {
        taskParagraph.style.textDecoration = 'line-through';
    } else {
        taskParagraph.style.textDecoration = 'none';
    }
}

// Add event listeners for checkbox and delete icon
document.addEventListener('change', function(event) {
    if (event.target.type === 'checkbox') {
        handleCheckboxCheck(event);
    }
});
