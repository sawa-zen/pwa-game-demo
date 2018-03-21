import * as THREE from 'three';

class Player extends THREE.Group {
  constructor() {
    super();

    // Mesh
    const mesh = new THREE.Mesh(
      new THREE.ConeGeometry(1, 2, 3),
      new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true }),
    );
    this.add(mesh);

    this.position.y = -9;
  }

  update() {
    this.rotation.y += 0.1;
  }
}

export default Player;
