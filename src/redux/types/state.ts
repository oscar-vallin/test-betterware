// Define your state types
export interface CartProduct {
  id?: string;
  name: string;
  price: string;
  description: string;
  img: string;
};

export interface CartProductState {
  loading: boolean;
  success: boolean;
  cartProducts: CartProduct[];
  error: string | null;
};

export interface AppState {
  cartProduct: CartProductState;
};
