import Output from '../output/output.js';

export default class App {
  constructor(block) {
    this.block = block;
    this.output = new Output();
  }

  init() {
    this.output.render(this.block);
    this.renderDescription();
  }

  renderDescription() {
    const descriptionFirst = document.createElement('p');
    const descriptionSecond = document.createElement('p');

    descriptionFirst.innerText = 'Клавиатура создана в операционной системе Windows';
    descriptionSecond.innerText = 'Для переключения языка комбинация: LeftCtrl + LeftAlt';

    this.block.append(descriptionFirst, descriptionSecond);
  }
}
