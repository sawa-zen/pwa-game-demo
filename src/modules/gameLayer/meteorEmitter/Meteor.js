import {
  Group,
  Mesh,
  IcosahedronGeometry,
  MeshBasicMaterial,
} from 'three';

class Meteo extends Group {
  constructor() {
    super();
    const mesh = new Mesh(
      new IcosahedronGeometry(2, 0),
      new MeshBasicMaterial({ color: 0xff0000, wireframe: true }),
    );
    this.add(mesh);
  }

  update() {
    this.rotation.z += 0.05;
    this.rotation.y += 0.05;
  }
}

export default Meteo;
