import { combineReducers } from 'redux';
import cartProductReducer from './cartProductReducer';

const rootReducer = combineReducers<any>({
  cartProduct: cartProductReducer,
});

export default rootReducer;
