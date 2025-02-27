document.addEventListener('DOMContentLoaded', () => {
    const addButton: HTMLElement | null = document.getElementById('add-btn');
    const todoInput: HTMLInputElement | null = document.querySelector('.todo-input');
    const todoList: HTMLElement | null = document.querySelector('.todo-list');

    if (addButton && todoInput && todoList) {
        addButton.addEventListener('click', () => {
            const todoText: string = todoInput.value.trim();
            if (todoText !== '') {
                const todoItem: HTMLLIElement = document.createElement('li');
                todoItem.className = 'todo-item';

                const todoCheckbox: HTMLInputElement = document.createElement('input');
                todoCheckbox.type = 'checkbox';
                todoCheckbox.className = 'todo-checkbox';

                const todoSpan: HTMLSpanElement = document.createElement('span');
                todoSpan.className = 'todo-text';
                todoSpan.textContent = todoText;

                const xBtn: HTMLButtonElement = document.createElement('button');
                xBtn.className = 'x-btn';
                xBtn.textContent = 'X';
                xBtn.addEventListener('click', () => {
                    if (todoCheckbox.checked) {
                        todoItem.remove();
                    }
                });

                todoItem.appendChild(todoCheckbox);
                todoItem.appendChild(todoSpan);
                todoItem.appendChild(xBtn);
                todoList.appendChild(todoItem);

                todoInput.value = '';
            }
        });
    }
});
