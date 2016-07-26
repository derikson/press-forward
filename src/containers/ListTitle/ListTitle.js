import React from 'react';
import { connect } from 'react-redux';

const ListTitle = connect(
  state => {
    const title = state.get('name');
    return {
      title: title && title.match(/\S/) ?
        title :
        'My List'
    };
  }
)(
  ({ title }) => <h2>{title}</h2>
);

export default ListTitle;
