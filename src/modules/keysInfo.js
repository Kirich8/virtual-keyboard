const keysArray = [
  {
    char: '`', code: 'Backquote', className: ['neon-button'], charUp: '~', charRu: 'ё', charRuUp: 'Ё', caps: '`', capsRu: 'Ё',
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
    char: 'Backspace', code: 'Backspace', className: ['neon-button', 'big', 'green'],
  },
  {
    char: 'Tab', code: 'Tab', className: ['neon-button', 'middle', 'green'],
  },
  {
    char: 'q', code: 'KeyQ', className: ['neon-button'], charUp: 'Q', charRu: 'й', charRuUp: 'Й', caps: 'Q', capsRu: 'Й',
  },
  {
    char: 'w', code: 'KeyW', className: ['neon-button'], charUp: 'W', charRu: 'ц', charRuUp: 'Ц', caps: 'W', capsRu: 'Ц',
  },
  {
    char: 'e', code: 'KeyE', className: ['neon-button'], charUp: 'E', charRu: 'у', charRuUp: 'У', caps: 'E', capsRu: 'У',
  },
  {
    char: 'r', code: 'KeyR', className: ['neon-button'], charUp: 'R', charRu: 'к', charRuUp: 'К', caps: 'R', capsRu: 'К',
  },
  {
    char: 't', code: 'KeyT', className: ['neon-button'], charUp: 'T', charRu: 'е', charRuUp: 'Е', caps: 'T', capsRu: 'Е',
  },
  {
    char: 'y', code: 'KeyY', className: ['neon-button'], charUp: 'Y', charRu: 'н', charRuUp: 'Н', caps: 'Y', capsRu: 'Н',
  },
  {
    char: 'u', code: 'KeyU', className: ['neon-button'], charUp: 'U', charRu: 'г', charRuUp: 'Г', caps: 'U', capsRu: 'Г',
  },
  {
    char: 'i', code: 'KeyI', className: ['neon-button'], charUp: 'I', charRu: 'ш', charRuUp: 'Ш', caps: 'I', capsRu: 'Ш',
  },
  {
    char: 'o', code: 'KeyO', className: ['neon-button'], charUp: 'O', charRu: 'щ', charRuUp: 'Щ', caps: 'O', capsRu: 'Щ',
  },
  {
    char: 'p', code: 'KeyP', className: ['neon-button'], charUp: 'P', charRu: 'з', charRuUp: 'З', caps: 'P', capsRu: 'З',
  },
  {
    char: '[', code: 'BracketLeft', className: ['neon-button'], charUp: '{', charRu: 'х', charRuUp: 'Х', caps: '[', capsRu: 'Х',
  },
  {
    char: ']', code: 'BracketRight', className: ['neon-button'], charUp: '}', charRu: 'ъ', charRuUp: 'Ъ', caps: ']', capsRu: 'Ъ',
  },
  {
    char: '\\', code: 'Backslash', className: ['neon-button'], charUp: '|', charRu: '\\', charRuUp: '/',
  },
  {
    char: 'Del', code: 'Delete', className: ['neon-button', 'middle', 'green'],
  },
  {
    char: 'Caps Lock', code: 'CapsLock', className: ['neon-button', 'medium', 'green'],
  },
  {
    char: 'a', code: 'KeyA', className: ['neon-button'], charUp: 'A', charRu: 'ф', charRuUp: 'Ф', caps: 'A', capsRu: 'Ф',
  },
  {
    char: 's', code: 'KeyS', className: ['neon-button'], charUp: 'S', charRu: 'ы', charRuUp: 'Ы', caps: 'S', capsRu: 'Ы',
  },
  {
    char: 'd', code: 'KeyD', className: ['neon-button'], charUp: 'D', charRu: 'в', charRuUp: 'В', caps: 'D', capsRu: 'В',
  },
  {
    char: 'f', code: 'KeyF', className: ['neon-button'], charUp: 'F', charRu: 'а', charRuUp: 'А', caps: 'F', capsRu: 'А',
  },
  {
    char: 'g', code: 'KeyG', className: ['neon-button'], charUp: 'G', charRu: 'п', charRuUp: 'П', caps: 'G', capsRu: 'П',
  },
  {
    char: 'h', code: 'KeyH', className: ['neon-button'], charUp: 'H', charRu: 'р', charRuUp: 'Р', caps: 'H', capsRu: 'Р',
  },
  {
    char: 'j', code: 'KeyJ', className: ['neon-button'], charUp: 'J', charRu: 'о', charRuUp: 'О', caps: 'J', capsRu: 'О',
  },
  {
    char: 'k', code: 'KeyK', className: ['neon-button'], charUp: 'K', charRu: 'л', charRuUp: 'Л', caps: 'K', capsRu: 'Л',
  },
  {
    char: 'l', code: 'KeyL', className: ['neon-button'], charUp: 'L', charRu: 'д', charRuUp: 'Д', caps: 'L', capsRu: 'Д',
  },
  {
    char: ';', code: 'Semicolon', className: ['neon-button'], charUp: ':', charRu: 'ж', charRuUp: 'Ж', caps: ';', capsRu: 'Ж',
  },
  {
    char: "'", code: 'Quote', className: ['neon-button'], charUp: '"', charRu: 'э', charRuUp: 'Э', caps: "'", capsRu: 'Э',
  },
  {
    char: 'Enter', code: 'Enter', className: ['neon-button', 'medium', 'green'],
  },
  {
    char: 'Shift', code: 'ShiftLeft', className: ['neon-button', 'medium', 'green'],
  },
  {
    char: 'z', code: 'KeyZ', className: ['neon-button'], charUp: 'Z', charRu: 'я', charRuUp: 'Я', caps: 'Z', capsRu: 'Я',
  },
  {
    char: 'x', code: 'KeyX', className: ['neon-button'], charUp: 'X', charRu: 'ч', charRuUp: 'Ч', caps: 'X', capsRu: 'Ч',
  },
  {
    char: 'c', code: 'KeyC', className: ['neon-button'], charUp: 'C', charRu: 'с', charRuUp: 'С', caps: 'C', capsRu: 'С',
  },
  {
    char: 'v', code: 'KeyV', className: ['neon-button'], charUp: 'V', charRu: 'м', charRuUp: 'М', caps: 'V', capsRu: 'М',
  },
  {
    char: 'b', code: 'KeyB', className: ['neon-button'], charUp: 'B', charRu: 'и', charRuUp: 'И', caps: 'B', capsRu: 'И',
  },
  {
    char: 'n', code: 'KeyN', className: ['neon-button'], charUp: 'N', charRu: 'т', charRuUp: 'Т', caps: 'N', capsRu: 'Т',
  },
  {
    char: 'm', code: 'KeyM', className: ['neon-button'], charUp: 'M', charRu: 'ь', charRuUp: 'Ь', caps: 'M', capsRu: 'Ь',
  },
  {
    char: ',', code: 'Comma', className: ['neon-button'], charUp: '<', charRu: 'б', charRuUp: 'Б', caps: ',', capsRu: 'Б',
  },
  {
    char: '.', code: 'Period', className: ['neon-button'], charUp: '>', charRu: 'ю', charRuUp: 'Ю', caps: '.', capsRu: 'Ю',
  },
  {
    char: '/', code: 'Slash', className: ['neon-button'], charUp: '?', charRu: '.', charRuUp: ',',
  },
  {
    char: '▲', code: 'ArrowUp', className: ['neon-button', 'green'],
  },
  {
    char: 'Shift', code: 'ShiftRight', className: ['neon-button', 'medium', 'green'],
  },
  {
    char: 'Ctrl', code: 'ControlLeft', className: ['neon-button', 'middle', 'green'],
  },
  {
    char: 'Win', code: 'MetaLeft', className: ['neon-button', 'green'],
  },
  {
    char: 'Alt', code: 'AltLeft', className: ['neon-button', 'green'],
  },
  {
    char: 'Space', code: 'Space', className: ['neon-button', 'space', 'green'],
  },
  {
    char: 'Alt', code: 'AltRight', className: ['neon-button', 'green'],
  },
  {
    char: '◀︎', code: 'ArrowLeft', className: ['neon-button', 'green'],
  },
  {
    char: '▼', code: 'ArrowDown', className: ['neon-button', 'green'],
  },
  {
    char: '▶︎', code: 'ArrowRight', className: ['neon-button', 'green'],
  },
  {
    char: 'Ctrl', code: 'ControlRight', className: ['neon-button', 'middle', 'green'],
  },
];

const functionalKey = ['Backspace', 'Tab', 'Del', 'Caps Lock', 'Enter', 'Shift', 'Ctrl', 'Alt', 'Space', 'Win', '▲', '◀︎', '▼', '▶︎'];

export { keysArray, functionalKey };
