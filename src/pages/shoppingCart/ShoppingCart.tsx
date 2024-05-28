import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState, CartProduct } from '../../redux/types/state';
import { ListGroup, Image, Button } from 'react-bootstrap';
import { fetchProducts, removeProductToCartList } from '../../redux/actions/cartProductAction';
import {
  CartContainer,
  ImageContainer,
  ListItemContainer,
  ProductDescription,
  ProductDetails,
  ProductName,
  ProductPrice,
} from './shoppingCart.styles';

export const ShoppingCart: React.FC = () => {
  const dispatch = useDispatch();
  const { cartProducts } = useSelector((state: AppState) => state.cartProduct);
  const [products, setProducts] = React.useState<CartProduct[]>([]);

  const handleRemoveFromCart = (producId: string) => {
    dispatch(removeProductToCartList(producId));
  }

  React.useEffect(() => {
    dispatch(fetchProducts());
  },[dispatch]);

  React.useEffect(() => {
    if (cartProducts.length) {
      setProducts(cartProducts);
    } else {
      setProducts([]);
    }
  }, [cartProducts])
  return (
    <CartContainer>
      <h2>Shopping Cart</h2>
      {products.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ListGroup>
          {products.map((product: CartProduct) => (
            <ListGroup.Item key={product.id}>
              <ListItemContainer>
                <ImageContainer>
                  <Image src={product.img} alt={product.name} thumbnail />
                </ImageContainer>
                <ProductDetails>
                  <ProductName>{product.name}</ProductName>
                  <ProductDescription>{product.description}</ProductDescription>
                  <ProductPrice>${product.price}</ProductPrice>
                </ProductDetails>
                <Button variant="danger" onClick={() => handleRemoveFromCart(product.id ?? '')}>
                  Remove
                </Button>
              </ListItemContainer>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </CartContainer>
  );
};


