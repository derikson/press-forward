/* @flow */

import { createStore } from 'redux';
import list from './redux/modules/list';

export default function configureStore(init?: any) {
  return createStore(list, init);
}
