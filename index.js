import TodoList from './TodoList.js';

const initialState = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
];

try {
  const todoList = new TodoList(initialState, 'todo-list');
} catch (err) {
  alert(err);
}
