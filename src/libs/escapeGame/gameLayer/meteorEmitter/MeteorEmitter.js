import { Group } from 'three';
import Meteor from './Meteor';
import store from '../../store';

class MeteorEmitter extends Group {
  _meteors = [];

  constructor() {
    super();
    const { meteors } = store.getState().meteorEmitter;

    // データの個数分作成
    meteors.forEach(() => {
      const meteor = new Meteor();
      this._meteors.push(meteor);
      this.add(meteor);
    });
  }

  update = () => {
    const { meteors } = store.getState().meteorEmitter;

    this._meteors.forEach((meteor, index) => {
      const { position } = meteors[index];
      meteor.position.set(position.x, position.y, 0);
      meteor.update();
    });
  }
}

export default MeteorEmitter;
