import {
  WebGLRenderer,
  PerspectiveCamera,
  Scene,
} from 'three';
import Player from '../player/Player';
import MeteorEmitter from '../meteorEmitter/MeteorEmitter';
import Background from '../background/Background';
import store from './store';
import { updatePlayer } from '../player/playerAction';
import { updateMeteors } from '../meteorEmitter/meteorEmitterAction';

class App {
  init() {
    // DOM
    this._wrapper = document.getElementById('my-canvas');

    // レンダラー
    this._renderer = new WebGLRenderer();
    this._renderer.setPixelRatio(1);
    this._renderer.setSize(window.innerWidth, window.innerHeight);
    this._wrapper.appendChild(this._renderer.domElement);

    // カメラ
    this._camera = new PerspectiveCamera(
      45, window.innerWidth / window.innerHeight, 1, 100
    );
    this._camera.position.z = 50;
    this._camera.lookAt(0, 0, 0);

    // シーン
    this._scene = new Scene();

    // プレイヤー
    this._player = new Player();
    this._scene.add(this._player);

    // 隕石エミッター
    this._meteorEmitter = new MeteorEmitter();
    this._scene.add(this._meteorEmitter);

    // 背景
    this._background = new Background();
    this._scene.add(this._background);

    // アニメーションを開始
    this._tick();
  }

  _tick = () => {
    requestAnimationFrame(this._tick);

    store.dispatch(updateMeteors());

    this._background.update();
    this._player.update();
    this._meteorEmitter.update();

    this._renderer.render(this._scene, this._camera);
  };
}

export default App;
