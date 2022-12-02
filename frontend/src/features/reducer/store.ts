import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from '../auth/userReducer';
import { adReducer } from './adReducer';

const store = createStore(
  combineReducers({
    adState: adReducer,
    userState: userReducer
  }), composeWithDevTools()
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
