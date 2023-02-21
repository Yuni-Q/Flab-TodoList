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

  this.$li.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-button')) {
      this.data = this.data.filter(
        (item) => item.id !== Number(e.target.closest('li').id)
      );
      console.log(this.data);
      this.render();
    }

    if (e.target.classList.contains('edit-button')) {
      //수정
    }
  });

  this.$input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      this.setState({
        id: this.data.length + 1,
        text: this.$input.value,
        isCompleted: false,
      });
      this.$input.value = '';
    }
  });

  this.render = () => {
    this.$li.innerHTML = this.data
      .map(({ id, text, isCompleted }) => {
        return isCompleted
          ? `<li id=${id}><s>${text}</s> <button class="edit-button">수정</button><button class="remove-button">삭제</button></li>`
          : `<li id=${id}>${text} <button class="edit-button">수정</button><button class="remove-button">삭제</button></li>`;
      })
      .join('');
  };

  this.render();
}

// TODO: 수정, 삭제 기능 구현
