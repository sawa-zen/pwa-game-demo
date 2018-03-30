import EventEmitter from 'eventemitter2';
import GameLayer from './gameLayer/GameLayer';

class EscapeGame extends EventEmitter {
  constructor(wrapperId) {
    super();

    // ゲームレイヤー
    this._gameLayer = new GameLayer(wrapperId);

    // HUDレイヤー
    this._hudLayer = null;

    // 描画開始
    this._render();
  }

  _render = () => {
    requestAnimationFrame(this._render);
    this._gameLayer.update();
  };
}

export default EscapeGame;
