import { combineReducers } from 'redux';
import { AppState } from './types/state';
import cartProductReducer from './cartProductReducer';

const rootReducer = combineReducers<any>({
  cartProduct: cartProductReducer,
});

export default rootReducer;
