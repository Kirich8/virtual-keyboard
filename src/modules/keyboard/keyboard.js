import Key from '../key/key.js';
import keysArray from '../keysInfo.js';

export default class Keyboard {
  constructor() {
    this.keyboard = null;
    this.output = null;
    this.document = document;
  }

  render(block) {
    this.output = document.querySelector('.board');
    this.keyboard = document.createElement('div');
    this.keyboard.className = 'keyboard';
    block.append(this.keyboard);

    this.renderKeys();
    this.listenEvents();
  }

  renderKeys() {
    keysArray.forEach((keyInfo) => {
      const key = new Key();
      const { char, code, className } = keyInfo;

      key.render(this.keyboard, char, className, code);
    });
  }

  insertText(char) {
    this.output.setRangeText(char, this.output.selectionStart, this.output.selectionEnd, 'end');
    this.output.focus();
  }

  addClass(code, className = 'click-button-green') {
    this.document.querySelector(`[data-code="${code}"]`).classList.add(className);
  }

  removeClass(code, ...className) {
    this.document.querySelector(`[data-code="${code}"]`).classList.remove(...className);
  }

  listenEvents() {
    document.addEventListener('keydown', (event) => {
      const codeButton = event.code;

      keysArray.forEach((keyInfo) => {
        if (codeButton === keyInfo.code) {
          this.addClass(codeButton, 'click-button');
          event.preventDefault();

          this.insertText(keyInfo.char);
        }
      });
    });

    document.addEventListener('keyup', (event) => {
      const classArray = ['click-button', 'click-button-green', 'click-button-space'];
      const codeButton = event.code;

      keysArray.forEach((keyInfo) => {
        if (keyInfo.code === codeButton) {
          setTimeout(() => {
            this.removeClass(codeButton, ...classArray);
          }, 50);
        }
      });
    });
  }
}
