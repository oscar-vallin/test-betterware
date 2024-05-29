import { combineReducers } from 'redux';
import cartProductReducer from './cartProductReducer';

const rootReducer = combineReducers({
  cartProduct: cartProductReducer,
});

export default rootReducer;
