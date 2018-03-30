import * as THREE from 'three';
import store from '../../store';

class Player extends THREE.Group {
  constructor() {
    super();

    // Mesh
    const mesh = new THREE.Mesh(
      new THREE.ConeGeometry(1, 2, 3),
      new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true }),
    );
    this.add(mesh);
  }

  update() {
    const { position } = store.getState().player;
    this.rotation.y += 0.1;
    // this.visible = !!lifepoint;
    this.position.set(position.x, position.y, 0);
  }
}

export default Player;
