import * as PIXI from 'pixi.js';

class Timer extends PIXI.Container {
  constructor() {
    super();

    this._text = new PIXI.Text(
      '00.00',
      {
        fontFamily : 'Arial',
        fontSize: 64,
        fill : 0xffffff,
        align : 'center',
      },
    );
    this._text.anchor.set(0.5);

    this.addChild(this._text);
  }

  update() {
  }
}

export default Timer;
