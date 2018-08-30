import { createStore } from 'redux';
import rootReducer from './reducers';

export default createStore(rootReducer);
// add combine reducers + add reducer for visibility
