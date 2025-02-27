document.addEventListener('DOMContentLoaded', function () {
    var addButton = document.getElementById('add-btn');
    var todoInput = document.querySelector('.todo-input');
    var todoList = document.querySelector('.todo-list');
    if (addButton && todoInput && todoList) {
        addButton.addEventListener('click', function () {
            var todoText = todoInput.value.trim();
            if (todoText !== '') {
                var todoItem_1 = document.createElement('li');
                todoItem_1.className = 'todo-item';
                var todoCheckbox_1 = document.createElement('input');
                todoCheckbox_1.type = 'checkbox';
                todoCheckbox_1.className = 'todo-checkbox';
                var todoSpan = document.createElement('span');
                todoSpan.className = 'todo-text';
                todoSpan.textContent = todoText;
                var xBtn = document.createElement('button');
                xBtn.className = 'x-btn';
                xBtn.textContent = 'X';
                xBtn.addEventListener('click', function () {
                    if (todoCheckbox_1.checked) {
                        todoItem_1.remove();
                    }
                });
                todoItem_1.appendChild(todoCheckbox_1);
                todoItem_1.appendChild(todoSpan);
                todoItem_1.appendChild(xBtn);
                todoList.appendChild(todoItem_1);
                todoInput.value = '';
            }
        });
    }
});
