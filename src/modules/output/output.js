export default class Output {
  constructor() {
    this.textArea = null;
  }

  render(block) {
    this.textArea = document.createElement('textarea');
    this.textArea.className = 'board';
    block.append(this.textArea);

    this.listenEvents();
  }

  listenEvents() {
    this.textArea.addEventListener('click', (event) => {
      event.preventDefault();
    });
  }
}
