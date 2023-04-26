export default class Key {
  constructor() {
    this.key = document.createElement('button');
  }

  render(block, text, classList, code) {
    this.key.classList.add(...classList);
    this.key.innerText = `${text}`;
    this.key.dataset.code = code;

    block.append(this.key);
  }
}
