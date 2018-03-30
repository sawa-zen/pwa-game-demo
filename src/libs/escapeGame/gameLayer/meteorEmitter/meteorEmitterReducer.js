import { Vector2 } from 'three';
import {
  UPDATE_METEORS,
  RESET_METEORS,
} from './meteorEmitterAction';
import { random } from '../../shared/utils';

const createMeteor = () => {
  const position = new Vector2(
    random(-15, 15),
    random(20, 40),
  );
  const velocity = new Vector2(
    random(-5, 5) / 100,
    -random(5, 20) / 100,
  );
  return {
    position,
    velocity,
  };
};

const createMeteors = (num) => {
  const meteors = [];

  for (let i = 0; i < num; i += 1) {
    meteors.push(createMeteor());
  }

  return meteors;
};

const updatePosition = (meteors) => {
  return meteors.map((meteor) => {
    let newPosition = meteor.position.clone().add(meteor.velocity);

    // 枠外からはみ出たらリセット
    if (
      newPosition.x < -15 ||
      newPosition.x > 15 ||
      newPosition.y < -25
    ) {
      return createMeteor();
    }

    return {
      ...meteor,
      position: newPosition,
    };
  });
};

const initMaxNum = 10;
const initState = {
  maxNum: initMaxNum,
  meteors: createMeteors(initMaxNum),
};

const meteorsReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_METEORS:
      return {
        ...state,
        meteors: updatePosition(state.meteors),
      };
    case RESET_METEORS:
      return {
        ...initState,
      };
    default:
      return state;
  }
};

export default meteorsReducer;
