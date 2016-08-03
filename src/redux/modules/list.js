/* @flow */

import { Record } from 'immutable';

export const SET_LIST_NAME    = 'press-forward/SET_LIST_NAME';
export const SET_EDIT_DETAILS = 'press-forward/SET_EDIT_DETAILS';

export type List = Record<{name: string, editDetails: boolean}>;

type SetListNameAction = {
  type: 'press-forward/SET_LIST_NAME',
  name: string
};

type SetEditDetailsAction = {
  type: 'press-forward/SET_EDIT_DETAILS',
  editDetails: boolean
};

type ListAction = SetListNameAction | SetEditDetailsAction;


const init: List = Record({
  name: null,
  editDetails: false
})();


export default function list(state: List = init, action: ListAction) : List {
  switch (action.type) {
    case SET_LIST_NAME:
      return state.set('name', action.name);
    case SET_EDIT_DETAILS:
      return state.set('editDetails', action.editDetails);
    default:
      return state;
  }
}


export function setListName(name: string) : SetListNameAction {
  return {
    type: SET_LIST_NAME,
    name
  };
}


export function setEditDetails(editDetails: boolean) : SetEditDetailsAction {
  return {
    type: SET_EDIT_DETAILS,
    editDetails
  };
}
