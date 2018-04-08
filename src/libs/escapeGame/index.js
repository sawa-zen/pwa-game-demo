import EventEmitter from 'eventemitter2';
import GameLayer from './gameLayer/GameLayer';
import HudLayer from './hudLayer/HudLayer';
import store from './store';
import { resetGame, checkClientSize } from './app/appAction';

class EscapeGame extends EventEmitter {
  _count = 0;
  _clientWidth = 0;
  _clientHeight = 0;

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
    this._dom.style.width = '100%';
    this._dom.style.height = '100%';
    this._dom.style.position = 'relative';

    // ゲームレイヤー
    this._gameLayer = new GameLayer();
    this._gameLayer.domElement.style.position = 'absolute';
    this._gameLayer.domElement.style.top = '0';
    this._gameLayer.domElement.style.left = '0';
    this._gameLayer.domElement.style.right = '0';
    this._gameLayer.domElement.style.bottom = '0';
    this._gameLayer.domElement.style.margin = 'auto';
    this._gameLayer.setSize(0, 0);
    this._dom.appendChild(this._gameLayer.domElement);

    // HUDレイヤー
    this._hudLayer = new HudLayer();
    this._hudLayer.domElement.style.position = 'absolute';
    this._hudLayer.domElement.style.top = '0';
    this._hudLayer.domElement.style.left = '0';
    this._hudLayer.domElement.style.right = '0';
    this._hudLayer.domElement.style.bottom = '0';
    this._hudLayer.domElement.style.margin = 'auto';
    this._hudLayer.setSize(0, 0);
    this._dom.appendChild(this._hudLayer.domElement);

    // 描画開始
    this._render();

    EscapeGame.instance = this;
    return this;
  }

  _resize() {
    if (
      this._clientWidth === this._dom.clientWidth &&
      this._clientHeight === this._dom.clientHeight
    ) {
      return;
    }

    this._clientWidth = this._dom.clientWidth;
    this._clientHeight = this._dom.clientHeight;

    let w = this._clientWidth,
        h = this._clientHeight;
    if (this._clientHeight < this._clientWidth / 9 * 16) {
      w = this._clientHeight / 16 * 9;
      h = this._clientHeight;
    } else {
      w = this._clientWidth;
      h = this._clientWidth / 9 * 16;
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
    this._count++;
    this._animationFrameId = requestAnimationFrame(this._render);
    this._gameLayer.update();
    this._hudLayer.update();

    if (this._count % 10 === 0) {
      this._resize();
    }
  };
}

export default EscapeGame;
