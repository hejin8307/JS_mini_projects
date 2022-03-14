'use strict';

const todos = document.querySelector('#todo-list');
const btn = document.querySelector('.submit');
const todoInput = document.querySelector('#todo-input');
const msg = document.querySelector('#msg');

btn.addEventListener('click', onsubmit);

function onsubmit(event) {
  event.preventDefault();

  if (todoInput.value === '') {
    msg.style.display = 'block';
    setTimeout(() => (msg.style.display = 'none'), 2000);
    return;
  }
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(todoInput.value));
  li.classList.add('item');
  todos.appendChild(li);
  todoInput.value = '';
}
