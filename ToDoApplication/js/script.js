document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-btn');
    const deleteButton = document.getElementById('delete-btn');
    const todoInput = document.querySelector('.todo-input');
    const todoList = document.querySelector('.todo-list');

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

            todoItem.appendChild(todoCheckbox);
            todoItem.appendChild(todoSpan);
            todoList.appendChild(todoItem);

            todoInput.value = '';
        }
    });

    deleteButton.addEventListener('click', () => {
        const checkedItems = document.querySelectorAll('.todo-checkbox:checked');
        checkedItems.forEach(item => {
            item.parentElement.remove();
        });
    });
});
