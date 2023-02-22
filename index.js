import TodoList from './TodoList.js';

const initialState = [
  {
    id: 1,
    text: 'JS 공부하기',
    isCompleted: true,
    isEdit: false,
  },
  {
    id: 2,
    text: 'JS 복습하기',
    isCompleted: false,
    isEdit: false,
  },
];

try {
  const todoList = new TodoList(initialState, 'todo-list');
} catch (err) {
  alert(err);
}
