import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App/App';
import './index.css';
import list from './redux/modules/list';

const store = createStore(list);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
