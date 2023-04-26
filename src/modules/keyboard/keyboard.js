import Key from '../key/key.js';
import keysArray from '../keysInfo.js';

export default class Keyboard {
  constructor() {
    this.keyboard = null;
  }

  render(block) {
    this.keyboard = document.createElement('div');
    this.keyboard.className = 'keyboard';
    block.append(this.keyboard);

    this.renderKeys();
  }

  renderKeys() {
    keysArray.forEach((keyInfo) => {
      const key = new Key();
      const { char, code, className } = keyInfo;

      key.render(this.keyboard, char, className, code);
    });
  }
}
