document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-btn');
    const deleteButton = document.getElementsByClassName('x-btn');
    const todoInput = document.querySelector('.todo-input');
    const todoList = document.querySelector('.todo-list');

    console.log(deleteButton)

    addButton.addEventListener('click', () => {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            const todoItem = document.createElement('li');
            todoItem.className = 'todo-item';

            const todoCheckbox = document.createElement('input');
            todoCheckbox.type = 'checkbox';
            todoCheckbox.className = 'todo-checkbox';

            const todoSpan = document.createElement('span');
            todoSpan.className = 'todo-text';
            todoSpan.textContent = todoText;

            const xBtn = document.createElement('button');
            xBtn.className = 'x-btn';
            xBtn.textContent = 'X';
            xBtn.addEventListener('click', () => {
                todoItem.remove();
            });

            todoItem.appendChild(todoCheckbox);
            todoItem.appendChild(todoSpan);
            todoItem.appendChild(xBtn);
            todoList.appendChild(todoItem);

            todoInput.value = '';
        }
    });

    Array.from(deleteButton).forEach(button => {
        button.addEventListener('click', () => {

            const checkedItems = document.querySelectorAll('.todo-checkbox:checked');

            checkedItems.forEach(item => {
                if (item.parentElement.isEqualNode(button.parentElement)) 
                    item.parentElement.remove();
            });
        });
    });
});
