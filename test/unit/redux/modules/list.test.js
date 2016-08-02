import { expect } from 'chai';
import { Map } from 'immutable';
import reducer, {
  SET_LIST_NAME,
  SET_EDIT_DETAILS,
  setListName,
  setEditDetails
} from '../../../../src/redux/modules/list.js';

describe('actions', () => {
  it('should create an action to set the list name', () => {
    const name = 'Sorcha1 List';
    const expectedAction = {
      type: SET_LIST_NAME,
      name
    };
    expect(setListName(name)).to.deep.equal(expectedAction);
  });

  it('should create an action to edit details', () => {
    const expectedAction = {
      type: SET_EDIT_DETAILS,
      editDetails: false
    };
    expect(setEditDetails(false)).to.deep.equal(expectedAction);
  });
});


describe('list reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).to.equal(Map({ name: null, editDetails: false }));
  });

  it('should handle SET_LIST_NAME', () => {
    expect(
      reducer(Map({ name: null }), {
        type: SET_LIST_NAME,
        name: 'Sorcha1 List'
      })
    ).to.equal(Map({ name: 'Sorcha1 List' }));
  });

  it('should handle SET_EDIT_DETAILS', () => {
    expect(
      reducer(Map({ editDetails: false }), {
        type: SET_EDIT_DETAILS,
        editDetails: true
      })
    ).to.equal(Map({ editDetails: true }));
  });
});
