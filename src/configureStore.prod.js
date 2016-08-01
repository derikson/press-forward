import { createStore } from 'redux';
import list from './redux/modules/list';

export default function configureStore(init) {
  return createStore(list, init);
}
