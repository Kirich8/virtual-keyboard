const keysArray = [
  {
    char: '`', code: 'Backquote', className: ['neon-button'], charUp: '~', charRu: 'ё', charRuUp: 'Ё',
  },
  {
    char: '1', code: 'Digit1', className: ['neon-button'], charUp: '!', charRu: '1', charRuUp: '!',
  },
  {
    char: '2', code: 'Digit2', className: ['neon-button'], charUp: '@', charRu: '2', charRuUp: '"',
  },
  {
    char: '3', code: 'Digit3', className: ['neon-button'], charUp: '#', charRu: '3', charRuUp: '№',
  },
  {
    char: '4', code: 'Digit4', className: ['neon-button'], charUp: '$', charRu: '4', charRuUp: '%',
  },
  {
    char: '5', code: 'Digit5', className: ['neon-button'], charUp: '%', charRu: '5', charRuUp: ':',
  },
  {
    char: '6', code: 'Digit6', className: ['neon-button'], charUp: '^', charRu: '6', charRuUp: ',',
  },
  {
    char: '7', code: 'Digit7', className: ['neon-button'], charUp: '&', charRu: '7', charRuUp: '.',
  },
  {
    char: '8', code: 'Digit8', className: ['neon-button'], charUp: '*', charRu: '8', charRuUp: ';',
  },
  {
    char: '9', code: 'Digit9', className: ['neon-button'], charUp: '(', charRu: '9', charRuUp: '(',
  },
  {
    char: '0', code: 'Digit0', className: ['neon-button'], charUp: ')', charRu: '0', charRuUp: ')',
  },
  {
    char: '-', code: 'Minus', className: ['neon-button'], charUp: '_', charRu: '-', charRuUp: '_',
  },
  {
    char: '=', code: 'Equal', className: ['neon-button'], charUp: '+', charRu: '=', charRuUp: '+',
  },
  {
    char: 'Backspace', code: 'Backspace', className: ['neon-button', 'big', 'green'], charUp: 'Backspace', charRu: 'Backspace', charRuUp: 'Backspace',
  },
  {
    char: 'Tab', code: 'Tab', className: ['neon-button', 'middle', 'green'], charUp: 'Tab', charRu: 'Tab', charRuUp: 'Tab',
  },
  {
    char: 'q', code: 'KeyQ', className: ['neon-button'], charUp: 'Q', charRu: 'й', charRuUp: 'Й',
  },
  {
    char: 'w', code: 'KeyW', className: ['neon-button'], charUp: 'W', charRu: 'ц', charRuUp: 'Ц',
  },
  {
    char: 'e', code: 'KeyE', className: ['neon-button'], charUp: 'E', charRu: 'у', charRuUp: 'У',
  },
  {
    char: 'r', code: 'KeyR', className: ['neon-button'], charUp: 'R', charRu: 'к', charRuUp: 'К',
  },
  {
    char: 't', code: 'KeyT', className: ['neon-button'], charUp: 'T', charRu: 'е', charRuUp: 'Е',
  },
  {
    char: 'y', code: 'KeyY', className: ['neon-button'], charUp: 'Y', charRu: 'н', charRuUp: 'Н',
  },
  {
    char: 'u', code: 'KeyU', className: ['neon-button'], charUp: 'U', charRu: 'г', charRuUp: 'Г',
  },
  {
    char: 'i', code: 'KeyI', className: ['neon-button'], charUp: 'I', charRu: 'ш', charRuUp: 'Ш',
  },
  {
    char: 'o', code: 'KeyO', className: ['neon-button'], charUp: 'O', charRu: 'щ', charRuUp: 'Щ',
  },
  {
    char: 'p', code: 'KeyP', className: ['neon-button'], charUp: 'P', charRu: 'з', charRuUp: 'З',
  },
  {
    char: '[', code: 'BracketLeft', className: ['neon-button'], charUp: '{', charRu: 'х', charRuUp: 'Х',
  },
  {
    char: ']', code: 'BracketRight', className: ['neon-button'], charUp: '}', charRu: 'ъ', charRuUp: 'Ъ',
  },
  {
    char: '\\', code: 'Backslash', className: ['neon-button'], charUp: '|', charRu: '\\', charRuUp: '/',
  },
  {
    char: 'Del', code: 'Del', className: ['neon-button', 'middle', 'green'], charUp: 'Del', charRu: 'Del', charRuUp: 'Del',
  },
  {
    char: 'Caps Lock', code: 'CapsLock', className: ['neon-button', 'medium', 'green'], charUp: 'Caps Lock', charRu: 'Caps Lock', charRuUp: 'Caps Lock',
  },
  {
    char: 'a', code: 'KeyA', className: ['neon-button'], charUp: 'A', charRu: 'ф', charRuUp: 'Ф',
  },
  {
    char: 's', code: 'KeyS', className: ['neon-button'], charUp: 'S', charRu: 'ы', charRuUp: 'Ы',
  },
  {
    char: 'd', code: 'KeyD', className: ['neon-button'], charUp: 'D', charRu: 'в', charRuUp: 'В',
  },
  {
    char: 'f', code: 'KeyF', className: ['neon-button'], charUp: 'F', charRu: 'а', charRuUp: 'А',
  },
  {
    char: 'g', code: 'KeyG', className: ['neon-button'], charUp: 'G', charRu: 'п', charRuUp: 'П',
  },
  {
    char: 'h', code: 'KeyH', className: ['neon-button'], charUp: 'H', charRu: 'р', charRuUp: 'Р',
  },
  {
    char: 'j', code: 'KeyJ', className: ['neon-button'], charUp: 'J', charRu: 'о', charRuUp: 'О',
  },
  {
    char: 'k', code: 'KeyK', className: ['neon-button'], charUp: 'K', charRu: 'л', charRuUp: 'Л',
  },
  {
    char: 'l', code: 'KeyL', className: ['neon-button'], charUp: 'L', charRu: 'д', charRuUp: 'Д',
  },
  {
    char: ';', code: 'Semicolon', className: ['neon-button'], charUp: ':', charRu: 'ж', charRuUp: 'Ж',
  },
  {
    char: "'", code: 'Quote', className: ['neon-button'], charUp: '"', charRu: 'э', charRuUp: 'Э',
  },
  {
    char: 'Enter', code: 'Enter', className: ['neon-button', 'medium', 'green'], charUp: 'Enter', charRu: 'Enter', charRuUp: 'Enter',
  },
  {
    char: 'Shift', code: 'ShiftLeft', className: ['neon-button', 'medium', 'green'], charUp: 'Shift', charRu: 'Shift', charRuUp: 'Shift',
  },
  {
    char: 'z', code: 'KeyZ', className: ['neon-button'], charUp: 'Z', charRu: 'я', charRuUp: 'Я',
  },
  {
    char: 'x', code: 'KeyX', className: ['neon-button'], charUp: 'X', charRu: 'ч', charRuUp: 'Ч',
  },
  {
    char: 'c', code: 'KeyC', className: ['neon-button'], charUp: 'C', charRu: 'с', charRuUp: 'С',
  },
  {
    char: 'v', code: 'KeyV', className: ['neon-button'], charUp: 'V', charRu: 'м', charRuUp: 'М',
  },
  {
    char: 'b', code: 'KeyB', className: ['neon-button'], charUp: 'B', charRu: 'и', charRuUp: 'И',
  },
  {
    char: 'n', code: 'KeyN', className: ['neon-button'], charUp: 'N', charRu: 'т', charRuUp: 'Т',
  },
  {
    char: 'm', code: 'KeyM', className: ['neon-button'], charUp: 'M', charRu: 'ь', charRuUp: 'Ь',
  },
  {
    char: ',', code: 'Comma', className: ['neon-button'], charUp: '<', charRu: 'б', charRuUp: 'Б',
  },
  {
    char: '.', code: 'Period', className: ['neon-button'], charUp: '>', charRu: 'ю', charRuUp: 'Ю',
  },
  {
    char: '/', code: 'Slash', className: ['neon-button'], charUp: '?', charRu: '.', charRuUp: ',',
  },
  {
    char: '▲', code: 'ArrowUp', className: ['neon-button', 'green'], charUp: '▲', charRu: '▲', charRuUp: '▲',
  },
  {
    char: 'Shift', code: 'ShiftRight', className: ['neon-button', 'medium', 'green'], charUp: 'Shift', charRu: 'Shift', charRuUp: 'Shift',
  },
  {
    char: 'Ctrl', code: 'ControlLeft', className: ['neon-button', 'middle', 'green'], charUp: 'Ctrl', charRu: 'Ctrl', charRuUp: 'Ctrl',
  },
  {
    char: 'Win', code: 'MetaLeft', className: ['neon-button', 'green'], charUp: 'Win', charRu: 'Win', charRuUp: 'Win',
  },
  {
    char: 'Alt', code: 'AltLeft', className: ['neon-button', 'green'], charUp: 'Alt', charRu: 'Alt', charRuUp: 'Alt',
  },
  {
    char: 'Space', code: 'Space', className: ['neon-button', 'space', 'green'], charUp: 'Space', charRu: 'Space', charRuUp: 'Space',
  },
  {
    char: 'Alt', code: 'AltRight', className: ['neon-button', 'green'], charUp: 'Alt', charRu: 'Alt', charRuUp: 'Alt',
  },
  {
    char: '◀︎', code: 'ArrowLeft', className: ['neon-button', 'green'], charUp: '◀︎', charRu: '◀︎', charRuUp: '◀︎',
  },
  {
    char: '▼', code: 'ArrowDown', className: ['neon-button', 'green'], charUp: '▼', charRu: '▼', charRuUp: '▼',
  },
  {
    char: '▶︎', code: 'ArrowRight', className: ['neon-button', 'green'], charUp: '▶︎', charRu: '▶︎', charRuUp: '▶︎',
  },
  {
    char: 'Ctrl', code: 'ControlRight', className: ['neon-button', 'middle', 'green'], charUp: 'Ctrl', charRu: 'Ctrl', charRuUp: 'Ctrl',
  },
];

export default keysArray;
