const btn = document.querySelector('.btn');
const inputForm = document.querySelector('#todo-input');
const todoForm = document.querySelector('#todo-form');
const errorMessage = document.querySelector('#error-message');
const todoList = document.querySelector('#todo-list');

todoForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if (inputForm.value === ''){
        errorMessage.innerHTML = 'Please enter a task';
        setTimeout(() => errorMessage.innerHTML = '', 2000); // Clear the error message after 2 seconds
    }
    else {
        console.log("Adding item: " + inputForm.value); 
        errorMessage.innerHTML = ''; // Clear the error message when the input is not empty
        const li = document.createElement('li');
        li.classList.add('list-group-item'); // Add 'list-group-item' class to the li element

        // Create a new button
        const doneButton = document.createElement('button');
        doneButton.classList.add('btn', 'btn-secondary', 'mr-2'); // Make the button grey initially
        doneButton.textContent = 'complete';

        // Add an event listener to the button
        doneButton.addEventListener('click', function() {
            // Check if the button is green
            if (this.classList.contains('btn-success')) {
                this.classList.remove('btn-success'); // Remove the green color
                this.classList.add('btn-secondary'); // Add the grey color
                li.classList.remove('text-decoration-line-through'); // Remove the line-through
            } else {
                this.classList.remove('btn-secondary'); // Remove the grey color
                this.classList.add('btn-success'); // Add the green color
                li.classList.add('text-decoration-line-through'); // Add the line-through
            }
        });

        // Append the button to the li
        li.appendChild(doneButton);

        // Add text node after the button
        li.appendChild(document.createTextNode(`${inputForm.value}`)); // Use back-ticks instead of single quotes
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn', 'btn-danger', 'ml-auto'); // Make the button red
        deleteButton.textContent = 'delete';

        // Add an event listener to the "delete" button
        deleteButton.addEventListener('click', function() {
            li.remove(); // Remove the li from the DOM
        });

        // Append the "delete" button to the li
        li.appendChild(deleteButton);
        todoList.appendChild(li);
        inputForm.value = '';
    }
}




