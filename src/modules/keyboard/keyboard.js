import Key from '../key/key.js';
import { keysArray, functionalKey } from '../keysInfo.js';

export default class Keyboard {
  constructor() {
    this.keyboard = null;
    this.output = null;
    this.document = document;
    this.language = 'en';
    this.capsLock = false;
    this.shift = false;
    this.shiftDown = false;
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
      const {
        char, code, className, charRu, caps, capsRu, charUp, charRuUp,
      } = keyInfo;
      const isThere = document.querySelector(`[data-code="${code}"]`);

      if (!isThere) {
        if (functionalKey.includes(char)) {
          key.render(this.keyboard, char, className, code);
        } else {
          if (this.language === 'en') key.render(this.keyboard, char, className, code);
          if (this.language === 'ru') key.render(this.keyboard, charRu, className, code);
        }
      } else if (functionalKey.includes(char)) {
        isThere.innerHTML = char;
      } else {
        if (this.shift) {
          if (this.language === 'en') isThere.innerHTML = charUp;
          if (this.language === 'ru') isThere.innerHTML = charRuUp;
        } else {
          if (this.language === 'en') isThere.innerHTML = char;
          if (this.language === 'ru') isThere.innerHTML = charRu;
        }
        
        if (this.capsLock) {
          if (this.language === 'en') {
            if (caps) {
              isThere.innerHTML = caps;
            }
          }
          if (this.language === 'ru') {
            if (capsRu) {
              isThere.innerHTML = capsRu;
            }
          }
        }

        if (this.capsLock && this.shift) {
          if (this.language === 'en') {
            if (caps) {
              isThere.innerHTML = char;
            } else {
              isThere.innerHTML = charUp;
            }
          } else if (caps) {
            isThere.innerHTML = charRu;
          } else {
            isThere.innerHTML = charRuUp;
          }
        }
      }
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

  clickBackspace() {
    const start = this.output.selectionStart;
    const end = this.output.selectionEnd;
    const text = this.output.value;

    if (end === 0 || this.output.value === 0) {
      return;
    }

    this.output.value = '';

    if (start === end) {
      this.insertText(text.slice(0, start - 1) + text.slice(end));
      this.output.selectionStart = start - 1;
      this.output.selectionEnd = this.output.selectionStart;
    } else {
      this.insertText(text.slice(0, start) + text.slice(end));
      this.output.selectionStart = start;
      this.output.selectionEnd = this.output.selectionStart;
    }
  }

  clickDelete() {
    const start = this.output.selectionStart;
    const end = this.output.selectionEnd;
    const text = this.output.value;

    if (!this.output.value) {
      return;
    }

    this.output.value = '';

    if (start === end) {
      this.insertText(text.slice(0, start) + text.slice(end + 1));
      this.output.selectionStart = start;
      this.output.selectionEnd = this.output.selectionStart;
    } else {
      this.insertText(text.slice(0, start) + text.slice(end));
      this.output.selectionStart = start;
      this.output.selectionEnd = this.output.selectionStart;
    }
  }

  listenEvents() {
    document.addEventListener('keydown', (event) => {
      const codeButton = event.code;
      const char = document.querySelector(`[data-code="${codeButton}"]`).innerText;

      switch (codeButton) {
        case ('Tab'):
          this.addClass(codeButton);
          event.preventDefault();
          this.insertText('\t');
          break;

        case ('Backspace'):
          this.addClass(codeButton);
          this.output.focus();
          break;

        case ('Delete'):
          this.addClass(codeButton);
          this.output.focus();
          break;

        case ('CapsLock'):
          if (this.capsLock) {
            this.capsLock = false;
            this.renderKeys();
            this.removeClass(codeButton, 'click-button-green');
          } else {
            this.capsLock = true;
            this.renderKeys();
            this.addClass(codeButton);
          }
          break;

        case ('Enter'):
          this.addClass(codeButton);
          event.preventDefault();
          this.insertText('\n');
          break;

        case ('ShiftLeft'):
          if (this.shift) this.removeClass('ShiftRight', 'click-button-green');
          this.shiftDown = true;
          this.shift = true;
          this.renderKeys();
          this.addClass(codeButton);
          break;

        case ('ShiftRight'):
          if (this.shift) this.removeClass('ShiftLeft', 'click-button-green');
          this.shiftDown = true;
          this.shift = true;
          this.renderKeys();
          this.addClass(codeButton);
          break;

        case ('ControlLeft'):
          this.addClass(codeButton);
          break;

        case ('ControlRight'):
          this.addClass(codeButton);
          break;

        case ('AltLeft'):
          this.addClass(codeButton);
          break;

        case ('AltRight'):
          this.addClass(codeButton);
          break;

        case ('MetaLeft'):
          this.addClass(codeButton);
          break;

        case ('Space'):
          this.addClass(codeButton, 'click-button-space');
          event.preventDefault();
          this.insertText(' ');
          break;

        case ('ArrowLeft'):
          this.addClass(codeButton, 'click-button-space');
          event.preventDefault();
          this.insertText('◀︎');
          break;

        case ('ArrowRight'):
          this.addClass(codeButton, 'click-button-space');
          event.preventDefault();
          this.insertText('►');
          break;

        case ('ArrowUp'):
          this.addClass(codeButton, 'click-button-space');
          event.preventDefault();
          this.insertText('▲');
          break;

        case ('ArrowDown'):
          this.addClass(codeButton, 'click-button-space');
          event.preventDefault();
          this.insertText('▼');
          break;

        default:
          this.addClass(codeButton, 'click-button');
          event.preventDefault();
          this.insertText(char);
      }

      if (event.ctrlKey && event.altKey) {
        this.language = this.language === 'en' ? 'ru' : 'en';

        this.renderKeys();
      }
    });

    document.addEventListener('keyup', (event) => {
      const classArray = ['click-button', 'click-button-green', 'click-button-space'];
      const codeButton = event.code;

      switch (codeButton) {
        case ('ShiftLeft'):
          this.shiftDown = false;
          this.shift = false;
          this.renderKeys();
          this.removeClass(codeButton, ...classArray);
          break;

        case ('ShiftRight'):
          this.shiftDown = false;
          this.shift = false;
          this.renderKeys();
          this.removeClass(codeButton, ...classArray);
          break;

        default:
          setTimeout(() => {
            this.removeClass(codeButton, ...classArray);
          }, 50);
      }
    });

    document.addEventListener('click', (event) => {
      if (event.target.classList.contains('neon-button')) {
        const codeButton = event.target.dataset.code;
        const char = document.querySelector(`[data-code="${codeButton}"]`).innerText;

        switch (codeButton) {
          case ('Tab'):
            this.insertText('\t');
            break;

          case ('Backspace'):
            this.clickBackspace();
            break;

          case ('Delete'):
            this.clickDelete();
            break;

          case ('CapsLock'):
            if (this.capsLock) {
              this.capsLock = false;
              this.renderKeys();
              this.removeClass(codeButton, 'click-button-green');
            } else {
              this.capsLock = true;
              this.renderKeys();
              this.addClass(codeButton);
            }
            break;

          case ('Enter'):
            this.insertText('\n');
            break;

          case ('ShiftLeft'):
            if (this.shift === false) {
              this.shift = true;
              this.renderKeys();
              this.addClass(codeButton);
              this.addClass('ShiftRight');
            } else {
              this.shift = false;
              this.renderKeys();
              this.removeClass(codeButton, 'click-button-green');
              this.removeClass('ShiftRight', 'click-button-green');
            }
            break;

          case ('ShiftRight'):
            if (this.shift === false) {
              this.shift = true;
              this.renderKeys();
              this.addClass(codeButton);
              this.addClass('ShiftLeft');
            } else {
              this.shift = false;
              this.renderKeys();
              this.removeClass(codeButton, 'click-button-green');
              this.removeClass('ShiftLeft', 'click-button-green');
            }
            break;

          case ('ControlLeft'):
            break;

          case ('ControlRight'):
            break;

          case ('AltLeft'):
            break;

          case ('AltRight'):
            break;

          case ('MetaLeft'):
            break;

          case ('Space'):
            this.insertText(' ');
            break;

          case ('ArrowLeft'):
            this.insertText('◀︎');
            break;

          case ('ArrowRight'):
            this.insertText('►');
            break;

          case ('ArrowUp'):
            this.insertText('▲');
            break;

          case ('ArrowDown'):
            this.insertText('▼');
            break;

          default:
            this.insertText(char);

            if (this.shift && !this.shiftDown) {
              this.shift = false;
              this.renderKeys();
              this.removeClass('ShiftLeft', 'click-button-green');
              this.removeClass('ShiftRight', 'click-button-green');
            }
        }
      }
    });
  }
}
