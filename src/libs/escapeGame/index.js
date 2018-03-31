import EventEmitter from 'eventemitter2';
import GameLayer from './gameLayer/GameLayer';
import HudLayer from './hudLayer/HudLayer';
import store from './store';
import { resetGame } from './app/appAction';

class EscapeGame extends EventEmitter {
  get domElement() {
    return this._dom;
  }

  get status() {
    return store.getState().player.status;
  }

  constructor() {
    super();

    if (EscapeGame.instance) {
      return EscapeGame.instance;
    }

    // DOM
    this._dom = document.createElement('div');
    this._dom.style.position = 'relative';

    // ゲームレイヤー
    this._gameLayer = new GameLayer();
    this._gameLayer.domElement.style.position = 'absolute';
    this._dom.appendChild(this._gameLayer.domElement);

    // HUDレイヤー
    this._hudLayer = new HudLayer();
    this._hudLayer.domElement.style.position = 'absolute';
    this._dom.appendChild(this._hudLayer.domElement);

    // 描画開始
    this._render();

    EscapeGame.instance = this;
    return this;
  }

  setSize(width, height) {
    this._dom.style.width = `${width}px`;
    this._dom.style.height = `${height}px`;
    this._gameLayer.setSize(width, height);
    this._hudLayer.setSize(width, height);
  }

  emitPublicEvent(eventName) {
    this.emit(eventName);
  }

  retry() {
    console.info('retry');
    store.dispatch(resetGame());
  }

  dispose() {
  }

  _render = () => {
    requestAnimationFrame(this._render);
    this._gameLayer.update();
    this._hudLayer.update();
  };
}

export default EscapeGame;
