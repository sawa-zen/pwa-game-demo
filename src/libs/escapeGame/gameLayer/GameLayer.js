import {
  WebGLRenderer,
  PerspectiveCamera,
  Scene,
  Vector2,
} from 'three';
import Player from './player/Player';
import MeteorEmitter from './meteorEmitter/MeteorEmitter';
import Background from './background/Background';
import store from '../store';
import { updatePlayer } from './player/playerAction';

class GameLayer {
  get domElement() {
    return this._renderer.domElement;
  }

  constructor(wrapperId) {
    // レンダラー
    this._renderer = new WebGLRenderer();
    this._renderer.setPixelRatio(1);

    // カメラ
    this._camera = new PerspectiveCamera();
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
  }

  setSize(width, height) {
    this._camera.aspect = width / height;
    this._camera.updateProjectionMatrix();
    this._renderer.setSize(width, height);
  }

  update() {
    store.dispatch(updatePlayer());

    this._player.update();
    this._meteorEmitter.update();
    this._background.update();
    this._renderer.render(this._scene, this._camera);
  }
}

export default GameLayer;
