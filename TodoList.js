export default function TodoList(data, target) {
  if (data === null || data === undefined)
    throw new Error('data가 null 또는 undefined 입니다.');
  if (!Array.isArray(data)) throw new Error('data가 배열이 아닙니다.');
  if (new.target === undefined)
    throw new Error('new 키워드가 사용되지 않았습니다.');

  this.data = data;
  this.$target = document.getElementById(target);
  this.$input = document.createElement('input');
  this.$li = document.createElement('ul');

  this.$target.appendChild(this.$input);
  this.$target.appendChild(this.$li);

  this.setState = (nextData) => {
    this.data = [...this.data, nextData];
    this.render();
  };

  this.$li.addEventListener('click', (e) => {});

  this.$input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      this.setState({ text: this.$input.value, isCompleted: false });
      this.$input.value = '';
    }
  });

  this.render = () => {
    this.$li.innerHTML = this.data
      .map(({ text, isCompleted }) => {
        return isCompleted ? `<li><s>${text}</s></li>` : `<li>${text}</li>`;
      })
      .join('');
  };

  this.render();
}
