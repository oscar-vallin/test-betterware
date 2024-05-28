import {
  FETCH_PRODUCTS_REQUEST, 
  FETCH_PRODUCTS_SUCCESS, 
  FETCH_PRODUCTS_FAILURE,
  ADD_PRODUCT_SUCCESS,
} from './types/actions';

import { CartProductActionTypes } from './types/actions';
import { CartProductState } from './types/state';

const initialState: CartProductState = {
  loading: false,
  success: false,
  cartProducts: [],
  error: null
};

const cartProductReducer = (state = initialState, action: CartProductActionTypes): CartProductState => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        loading: false,
        success: false,
        cartProducts: action.payload,
        error: null
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        loading: false,
        success: true,
        cartProducts: action.payload,
        error: null,
      }
    case FETCH_PRODUCTS_FAILURE:
      return {
        loading: false,
        success: false,
        cartProducts: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default cartProductReducer;
