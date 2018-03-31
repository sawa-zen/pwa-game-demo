import * as PIXI from 'pixi.js';
import store from '../../store';

class Timer extends PIXI.Container {
  constructor() {
    super();

    this._text = new PIXI.Text(
      '00.00',
      {
        fontFamily : 'Arial',
        fontSize: 36,
        fill : 0xffffff,
        align : 'center',
      },
    );
    this._text.anchor.set(0.5, 0);

    this.addChild(this._text);
  }

  update() {
    const { time } = store.getState().timer;
    const sec = ('000' + Math.floor(time / 60)).slice(-3);
    const msec = ('00' + time % 60).slice(-2);
    this._text.text = `${sec}.${msec}`;
  }
}

export default Timer;
