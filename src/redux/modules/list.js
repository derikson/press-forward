import { Map } from 'immutable';

export const SET_LIST_NAME = 'press-forward/SET_LIST_NAME';

const init = Map({
  name: null
});

export default function list(state = init, action = {}) {
  switch (action.type) {
    case SET_LIST_NAME:
      return state.set('name', action.name);
    default:
      return state;
  }
}


export function setListName(name) {
  return {
    type: SET_LIST_NAME,
    name
  };
}
