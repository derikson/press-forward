import { Record } from 'immutable';

export const SET_LIST_NAME    = 'press-forward/SET_LIST_NAME';
export const SET_EDIT_DETAILS = 'press-forward/SET_EDIT_DETAILS';

const init = Record({
  name: null,
  editDetails: false
})();

export default function list(state = init, action = {}) {
  switch (action.type) {
    case SET_LIST_NAME:
      return state.set('name', action.name);
    case SET_EDIT_DETAILS:
      return state.set('editDetails', action.editDetails);
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


export function setEditDetails(editDetails) {
  return {
    type: SET_EDIT_DETAILS,
    editDetails
  };
}
