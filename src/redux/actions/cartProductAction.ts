import {
  collection,
  addDoc,
  deleteDoc,
  doc
} from 'firebase/firestore';
import { firestore } from '../../firebase/firebase';
import { CartProduct } from '../types/state';
import {
  CartProductActionTypes,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  ADD_PRODUCT_SUCCESS,
} from '../types/actions';
import { shoppingCartProducts } from '../../firebase/getData';

// Action creators
const fetchProductsRequest = (): CartProductActionTypes => ({
  type: FETCH_PRODUCTS_REQUEST
});

const fetchProductsSuccess = (products: CartProduct[]): CartProductActionTypes => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products
});

const addProducSuccess = (products: CartProduct[]): CartProductActionTypes => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: products
});


const fetchProductsFailure = (error: string): CartProductActionTypes => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error
});


export const addProductToCartList = (product: CartProduct): any => {
  return async (dispatch: any) => {
    dispatch(fetchProductsRequest());
    try {
      const newProduct = {
        name: product.name,
        price: product.price,
        description: product.description,
        img: product.img,
      };
      
      await addDoc(collection(firestore, `shoppingCart/`), newProduct);

      const products = await shoppingCartProducts();

      dispatch(addProducSuccess(products));
    } catch (error: any) {
      console.log("err", error)
      dispatch(fetchProductsFailure(error.message));
    }
  };
};

export const removeProductToCartList = (productId: string): any => {
  return async (dispatch: any) => {
    dispatch(fetchProductsRequest());
    try {     
      const carDocRef = doc(firestore, 'shoppingCart', productId);
      await deleteDoc(carDocRef);

      const products = await shoppingCartProducts();
      dispatch(fetchProductsSuccess(products));
    } catch (error: any) {
      console.log("err", error)
      dispatch(fetchProductsFailure(error.message));
    }
  };
};

export const fetchProducts = ():any => {
  return async (dispatch: any) => {
    dispatch(fetchProductsRequest());
    try {
      const products = await shoppingCartProducts();
      dispatch(fetchProductsSuccess(products));
    } catch (error: any) {
      dispatch(fetchProductsFailure(error.message));
    }
  };
};
