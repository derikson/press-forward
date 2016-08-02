/* @flow */

import React from 'react';
import { connect } from 'react-redux';
import {
  setListName,
  setEditDetails
} from '../../redux/modules/list';
import './ListTitle.css';

const ListTitle = ({ editDetails, title, onSubmit, onEditDetails }) => {
  if(editDetails) {
    return (
      <div id="list-header">
        <input type="text" id="list-name" defaultValue={title} />
        <button onClick={onSubmit}>Finish</button>
      </div>
    );
  } else {
    return (
      <div id="list-header">
        <h2>{title}</h2>
        <button onClick={onEditDetails}>Edit</button>
      </div>
    );
  }
};

export default connect(
  state => {
    const stateTitle = state.get('name');
    const title = stateTitle && stateTitle.match(/\S/) ?
          stateTitle :
          'My List';
    return {
      title,
      editDetails: state.get('editDetails')
    };
  },
  dispatch => ({
    onEditDetails: e => {
      e.preventDefault();
      dispatch(setEditDetails(true));
    },
    onSubmit: e => {
      e.preventDefault();
      const ele = document.getElementById('list-name');
      if (ele instanceof HTMLInputElement) {
        dispatch(setListName(ele.value));
        dispatch(setEditDetails(false));
      }
    }
  })
)(ListTitle);
