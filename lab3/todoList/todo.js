document.getElementById('addBtn').addEventListener('click', function() {



    var taskInput = document.getElementById('taskInput').value;

    console.log('some')
    if (!taskInput.trim()) {
       
        alert("Please enter a task before adding!");
  
         return;
    }
  
    var newBox = document.createElement('div');
    newBox.id = 'boxContainer'; 

 
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox';

    var taskParagraph = document.createElement('p1');
    taskParagraph.id = 'task';
    taskParagraph.textContent = taskInput;



    var deleteIcon = document.createElement('i');
    deleteIcon.className = 'fa fa-trash-o';


    newBox.appendChild(checkbox);
    newBox.appendChild(taskParagraph);
    newBox.appendChild(deleteIcon);

 
    document.getElementById('box').appendChild(newBox);

    
    document.getElementById('taskInput').value = '';
    
});








function handleDeleteTask(event) {
    var deleteIcon = event.target;
    var taskContainer = deleteIcon.parentNode;

   
    taskContainer.parentNode.removeChild(taskContainer);
}


document.addEventListener('click', function(event) {
    if (event.target.classList.contains('fa-trash-o')) {
        handleDeleteTask(event);
    }
});





function handleCheckboxCheck(event) {
    var checkbox = event.target;
    var taskParagraph = checkbox.nextElementSibling; 

    if (checkbox.checked) {
        taskParagraph.style.textDecoration = 'line-through';
    } else {
        taskParagraph.style.textDecoration = 'none';
    }
}


document.addEventListener('change', function(event) {
    if (event.target.type === 'checkbox') {
        handleCheckboxCheck(event);
    }
});


document.getElementById('delete').addEventListener('click', function() {
    
    var box= document.getElementById('box')

    while(box.firstChild){
        box.firstChild.remove()
    }



});