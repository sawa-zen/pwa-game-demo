import * as PIXI from 'pixi.js';
import store from '../store';
import AnalogStick from './analogStick/AnalogStick';
import Timer from './timer/Timer';
import LifeGauge from './lifeGauge/LifeGauge';
import { startTimer, updateTime } from './timer/timerAction';

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
    this._analogStick = new AnalogStick();
    this._stage.addChild(this._analogStick);

    // タイマー
    this._timer = new Timer();
    this._stage.addChild(this._timer);
    store.dispatch(startTimer());

    // ライフゲージ
    this._lifeGauge = new LifeGauge();
    this._lifeGauge.y = 10;
    this._stage.addChild(this._lifeGauge);
  }

  setSize(width, height) {
    this._analogStick.x = width / 2;
    this._analogStick.y = height - 90;
    this._timer.x = width / 2;
    this._timer.y = 40;
    this._lifeGauge.width = width;
    this._renderer.resize(width, height);
  }

  update() {
    const { player } = store.getState();

    if (player.status === 'destroyed') {
      this._analogStick.hide();
    } else {
      this._analogStick.show();
    }

    store.dispatch(updateTime());
    this._timer.update();
    this._lifeGauge.update();

    this._renderer.render(this._stage);
  }
}

export default HudLayer;
