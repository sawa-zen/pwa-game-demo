import * as PIXI from 'pixi.js';
import PixiAnalogStick, { PUBLIC_EVENT_NAME } from 'pixi-analog-stick';
import store from '../store';
import { setStickData, resetStickData } from './hudLayerAction';

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
    this._analogStick.on(PUBLIC_EVENT_NAME.MOVE, this._onMoveStick);
    this._analogStick.on(PUBLIC_EVENT_NAME.RELEASE, this._onReleaseStick);
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

  _onMoveStick = (stickData) => {
    store.dispatch(setStickData(stickData));
  };

  _onReleaseStick = () => {
    store.dispatch(resetStickData());
  };
}

export default HudLayer;
