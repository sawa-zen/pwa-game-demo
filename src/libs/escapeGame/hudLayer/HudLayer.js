import * as PIXI from 'pixi.js';
import PixiAnalogStick from 'pixi-analog-stick';

class HudLayer {
  get domElement() {
    return this._renderer.view;
  }

  constructor() {
    // レンダラー
    this._renderer = new PIXI.WebGLRenderer({
      transparent: true,
    });
    this._renderer.plugins.interaction.moveWhenInside = true;

    // ステージ
    this._stage = new PIXI.Container();

    // アナログスティック
    this._analogStick = new PixiAnalogStick();
    this._analogStick.alpha = 0.5;
    this._stage.addChild(this._analogStick);
  }

  setSize(width, height) {
    this._analogStick.x = width / 2;
    this._analogStick.y = height - 90;
    this._renderer.resize(width, height);
  }

  update() {
    this._renderer.render(this._stage);
  }
}

export default HudLayer;
