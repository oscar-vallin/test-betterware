import { CartProduct } from './state';


// actions types
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';

export interface FetchProductsRequestAction {
  type: typeof FETCH_PRODUCTS_REQUEST;
}

export interface FetchProductsSuccessAction {
  type: typeof FETCH_PRODUCTS_SUCCESS;
  payload: CartProduct[];
}

export interface AddProductSuccessAction {
  type: typeof ADD_PRODUCT_SUCCESS;
  payload: CartProduct[];
}

export interface FetchProductsFailureAction {
  type: typeof FETCH_PRODUCTS_FAILURE;
  payload: string;
}

export type CartProductActionTypes = 
  | FetchProductsRequestAction 
  | FetchProductsSuccessAction 
  | FetchProductsFailureAction
  | AddProductSuccessAction
  | any;

export type AppActions = CartProductActionTypes;