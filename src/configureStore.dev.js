import { applyMiddleware, createStore } from 'redux';
import list from './redux/modules/list';
import createLogger from 'redux-logger';

export default function configureStore(init) {
  return createStore(list, init, applyMiddleware(createLogger()));
}
