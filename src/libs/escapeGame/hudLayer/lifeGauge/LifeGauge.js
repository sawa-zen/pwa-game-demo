import * as PIXI from 'pixi.js';
import store from '../../store';

class LifeGauge extends PIXI.Container {
  _width = 0;
  set width(value) {
    this._width = value;
  }

  constructor() {
    super();

    this._rect = new PIXI.Graphics();
    this.addChild(this._rect);
  }

  update() {
    const { player } = store.getState();
    const percentage = player.lifePoint / player.maxLifePoint;
    const width = percentage * (this._width - 20);
    this._rect.clear();
    this._rect.beginFill(0x00ffff, 0.5);
    this._rect.drawRect(10, 0, width, 20);
    this._rect.endFill();
  }
}

export default LifeGauge;
