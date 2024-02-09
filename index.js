const btn = document.querySelector('.btn');
const inputForm = document.querySelector('#todo-input');
const todoForm = document.querySelector('#todo-form');
const errorMessage = document.querySelector('#error-message');
const todoList = document.querySelector('#todo-list');

todoForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (inputForm.value === '') {
        errorMessage.innerHTML = 'Please enter a task';
        setTimeout(() => errorMessage.innerHTML = '', 2000);
    } else {
        console.log("Adding item: " + inputForm.value);
        errorMessage.innerHTML = '';
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

        // Кнопка complete (слева)
        const doneButton = document.createElement('button');
        doneButton.classList.add('btn', 'btn-secondary', 'mr-2');
        doneButton.textContent = 'complete';
        doneButton.addEventListener('click', function() {
            this.classList.toggle('btn-success');
            this.classList.toggle('btn-secondary');
            // li.classList.toggle('text-decoration-line-through');
        });

        li.appendChild(doneButton);

        // Текст задачи (по центру)
        const taskContent = document.createElement('span');
        taskContent.classList.add('task-content');
        taskContent.textContent = inputForm.value;
        li.appendChild(taskContent);

        // Кнопка delete (справа)
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn', 'btn-danger'); // Сделайте кнопку красной
        deleteButton.textContent = 'delete';
        deleteButton.addEventListener('click', function() {
            li.remove();
        });
        li.appendChild(deleteButton);

        todoList.appendChild(li);
        inputForm.value = '';
    }
}





