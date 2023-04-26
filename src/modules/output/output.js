export default class Output {
  constructor() {
    this.textArea = document.createElement('textarea');
  }

  render(block) {
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
