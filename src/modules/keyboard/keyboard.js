export default class Keyboard {
  constructor() {
    this.keyboard = null;
  }

  render(block) {
    this.keyboard = document.createElement('div');
    this.keyboard.className = 'keyboard';
    block.append(this.keyboard);
  }
}
