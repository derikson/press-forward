/* @flow */

import { applyMiddleware, createStore } from 'redux';
import list from './redux/modules/list';
import createLogger from 'redux-logger';

export default function configureStore(init?: any) {
  return createStore(list, init, applyMiddleware(createLogger()));
}
