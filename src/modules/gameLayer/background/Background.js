import {
  Group,
  Mesh,
  PlaneGeometry,
  MeshBasicMaterial,
} from 'three';

class Background extends Group {
  constructor() {
    super();

    const mesh = new Mesh(
      new PlaneGeometry(30, 300, 3, 30),
      new MeshBasicMaterial({
        color: 0x00ffff,
        wireframe: true,
        transparent: true,
        opacity: 0.2,
      }),
    );
    this.add(mesh);
  }

  update() {
    this.position.y -= 0.5;
    if (this.position.y < -100) {
      this.position.y = 0;
    }
  }
}

export default Background;
