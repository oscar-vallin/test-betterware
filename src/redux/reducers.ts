import { combineReducers } from 'redux';
import cartReducer from './productReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
