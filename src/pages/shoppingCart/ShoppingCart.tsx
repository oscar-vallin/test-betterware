import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState, CartProduct } from '../../redux/types/state';
import { ListGroup, Image, Button } from 'react-bootstrap';
import { fetchProducts, removeProductToCartList } from '../../redux/actions/cartProductAction';
import {
  CartContainer,
  ImageContainer,
  ListItemContainer,
  ProductDetails,
} from './shoppingCart.styles';

export const ShoppingCart: React.FC = () => {
  const dispatch = useDispatch();
  const { cartProducts } = useSelector((state: AppState) => state.cartProduct);
  const [products, setProducts] = React.useState<CartProduct[]>([]);
  const [productQuantity, setProductQuantity] = React.useState<any>();

  const removeDuplicates = (products: CartProduct[]) => {
    const uniqueArray = [];
    const seen = new Set();
    const obj: any = {};

    for (const product of products) {
      if (!seen.has(product.name)) {
        uniqueArray.push(product);
        seen.add(product.name);
      }

      if (obj[product['name']]) {
        obj[product['name']] += 1;
      } else {
        obj[product['name']] = 1;
      }
    }
    setProductQuantity(obj);
    return uniqueArray;
  };

  const handleRemoveFromCart = (producId: string) => {
    dispatch(removeProductToCartList(producId));
  };

  const renderProducts = () => {
    return (
      <ListGroup id='__ListShoppingCart'>
        {products.map((product: CartProduct) => (
          <ListGroup.Item key={product.id}>
            <ListItemContainer>
              <ImageContainer>
                <Image
                  id='__ImgShoppingCart'
                  src={product.img}
                  alt={product.name}
                  thumbnail 
                />
              </ImageContainer>
              <ProductDetails id='__ProductDetails'>
                <h5>{product.name}</h5>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <span>{productQuantity[product['name']]}</span>
              </ProductDetails>
              <Button variant="danger" onClick={() => handleRemoveFromCart(product.id ?? '')}>
                Remove
              </Button>
            </ListItemContainer>
          </ListGroup.Item>
        ))}
      </ListGroup>
    )
  } 

  React.useEffect(() => {
    dispatch(fetchProducts());
  },[dispatch]);

  React.useEffect(() => {
    if (cartProducts.length) {
      const values = removeDuplicates(cartProducts);
      setProducts(values);
    } else {
      setProducts([]);
    }
  }, [cartProducts]);
  return (
    <CartContainer>
      <h2>Shopping Cart</h2>
      {products.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        renderProducts()
      )}
    </CartContainer>
  );
};


