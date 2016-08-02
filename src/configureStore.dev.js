/* @flow */

import { applyMiddleware, createStore } from 'redux';
import list from './redux/modules/list';
import createLogger from 'redux-logger';
import { Iterable } from 'immutable';

export default function configureStore(init?: any) {
  const stateTransformer = (state) => {
    if (Iterable.isIterable(state)) {
      return state.toJS();
    } else {
      return state;
    }
  };
  const logger = createLogger({ stateTransformer });
  return createStore(list, init, applyMiddleware(logger));
}
