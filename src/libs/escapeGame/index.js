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
    this._gameLayer.domElement.style.top = '0';
    this._gameLayer.domElement.style.left = '0';
    this._gameLayer.domElement.style.right = '0';
    this._gameLayer.domElement.style.bottom = '0';
    this._gameLayer.domElement.style.margin = 'auto';
    this._dom.appendChild(this._gameLayer.domElement);

    // HUDレイヤー
    this._hudLayer = new HudLayer();
    this._hudLayer.domElement.style.position = 'absolute';
    this._hudLayer.domElement.style.top = '0';
    this._hudLayer.domElement.style.left = '0';
    this._hudLayer.domElement.style.right = '0';
    this._hudLayer.domElement.style.bottom = '0';
    this._hudLayer.domElement.style.margin = 'auto';
    this._dom.appendChild(this._hudLayer.domElement);

    // 描画開始
    this._render();

    EscapeGame.instance = this;
    return this;
  }

  setSize(width, height) {
    this._dom.style.width = `${width}px`;
    this._dom.style.height = `${height}px`;

    let w, h;
    if (height < width / 9 * 16) {
      w = height / 16 * 9;
      h = height;
    } else {
      w = width;
      h = width / 9 * 16;
    }

    this._gameLayer.setSize(w, h);
    this._hudLayer.setSize(w, h);
  }

  emitPublicEvent(eventName, payload) {
    this.emit(eventName, payload);
  }

  retry() {
    store.dispatch(resetGame());
  }

  dispose() {
    cancelAnimationFrame(this._animationFrameId);
    store.dispatch(resetGame());
    EscapeGame.instance = null;
  }

  _render = () => {
    this._animationFrameId = requestAnimationFrame(this._render);
    this._gameLayer.update();
    this._hudLayer.update();
  };
}

export default EscapeGame;
