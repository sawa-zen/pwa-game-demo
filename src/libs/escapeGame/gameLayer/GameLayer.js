import {
  WebGLRenderer,
  PerspectiveCamera,
  Scene,
  Vector2,
} from 'three';
import Player from './player/Player';
import Background from './background/Background';

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

//     // 隕石エミッター
//     this._meteorEmitter = new MeteorEmitter();
//     this._scene.add(this._meteorEmitter);
//
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
    this._player.update();
    this._background.update();
    this._renderer.render(this._scene, this._camera);
  }
}

export default GameLayer;
// import EventEmitter from 'eventemitter2';
// import Player from '../player/Player';
// import MeteorEmitter from '../meteorEmitter/MeteorEmitter';
// import Background from '../background/Background';
// import store from './store';
// import {
//   setScene,
//   requestCheckCollision,
// } from './appAction';
// import {
//   setDirection,
//   updatePlayer,
//   resetPlayer,
// } from '../player/playerAction';
// import {
//   updateMeteors,
//   resetMeteors,
// } from '../meteorEmitter/meteorEmitterAction';
//
// class App extends EventEmitter {
//   static _instance = null;
//   static get instance() {
//     return App._instance || new App();
//   }
//
//   constructor() {
//     super();
//
//     if (App._instance) {
//       return App._instance;
//     }
//
//     App._instance = this;
//     return this;
//   }
//
//   init() {
//     // DOM
//     this._wrapper = document.getElementById('my-canvas');
//
//     // レンダラー
//     this._renderer = new WebGLRenderer();
//     this._renderer.setPixelRatio(1);
//     this._renderer.setSize(window.innerWidth, window.innerHeight);
//     this._wrapper.appendChild(this._renderer.domElement);
//
//     // カメラ
//     this._camera = new PerspectiveCamera(
//       45, window.innerWidth / window.innerHeight, 1, 100
//     );
//     this._camera.position.z = 50;
//     this._camera.lookAt(0, 0, 0);
//
//     // シーン
//     this._scene = new Scene();
//
//     // プレイヤー
//     this._player = new Player();
//     this._scene.add(this._player);
//
//     // 隕石エミッター
//     this._meteorEmitter = new MeteorEmitter();
//     this._scene.add(this._meteorEmitter);
//
//     // 背景
//     this._background = new Background();
//     this._scene.add(this._background);
//
//     // アニメーションを開始
//     this._tick();
//   }
//
//   _tick = () => {
//     requestAnimationFrame(this._tick);
//
//     const { scene } = store.getState().app;
//     if (scene !== 'start') {
//       store.dispatch(updatePlayer());
//       store.dispatch(updateMeteors());
//       store.dispatch(requestCheckCollision());
//     }
//
//     this._background.update();
//     this._player.update();
//     this._meteorEmitter.update();
//
//     this._renderer.render(this._scene, this._camera);
//   };
//
//   updateProps(props) {
//     store.dispatch(setDirection(new Vector2(
//       props.direction[0],
//       props.direction[1],
//     )));
//
//     this._updateScene(props.scene);
//   }
//
//   _updateScene(newScene) {
//     const { scene } = store.getState().app;
//
//     // シーンに変更がなければ処理しない
//     if (scene === newScene) {
//       return;
//     }
//
//     if (scene === 'score') {
//       store.dispatch(resetPlayer());
//       store.dispatch(resetMeteors())
//     }
//
//     // シーンを変更する
//     store.dispatch(setScene(newScene));
//   }
// }
//
// export default App;
