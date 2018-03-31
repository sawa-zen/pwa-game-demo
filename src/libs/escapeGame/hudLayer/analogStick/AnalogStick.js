import * as PIXI from 'pixi.js';
import { Vector2 } from 'three';
import PixiAnalogStick, { PUBLIC_EVENT_NAME } from 'pixi-analog-stick';
import store from '../../store';
import { setDirection } from '../../gameLayer/player/playerAction';

class AnalogStick extends PIXI.Container {
  constructor() {
    super();

    // アナログスティック
    this._analogStick = new PixiAnalogStick();
    this._analogStick.alpha = 0.5;
    this._analogStick.on(PUBLIC_EVENT_NAME.MOVE, this._onMoveStick);
    this._analogStick.on(PUBLIC_EVENT_NAME.RELEASE, this._onReleaseStick);
    this.addChild(this._analogStick);
  }

  _onMoveStick = (stickData) => {
    store.dispatch(setDirection(new Vector2(
      stickData.x,
      -stickData.y,
    )));
  };

  _onReleaseStick = () => {
    store.dispatch(setDirection(new Vector2(0, 0)));
  };
}

export default AnalogStick;
