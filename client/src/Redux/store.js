import { legacy_createStore as createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

// Add a subscribe function to log changes
store.subscribe(() => {
  console.log('State changed:', store.getState());
});

export default store;
