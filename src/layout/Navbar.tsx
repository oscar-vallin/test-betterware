import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavbarStyled } from './navbar.styles';
import { NavbarLink } from '../components';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../redux/types/state';
import { fetchProducts } from '../redux/actions/cartProductAction';


export const NavbarSection = () => {
  const disptach = useDispatch();
  const { cartProducts } = useSelector((state: AppState) => state.cartProduct);

  const location = useLocation();
  const navigate = useNavigate();

  const [totalProducts, setTotalProducts] = React.useState(0);

  const backHome = () => {
    if (location.pathname === '/shoppingcart') {
      navigate('/');
    } 
  };

  React.useEffect(() => {
    disptach(fetchProducts());
  }, [disptach]);

  React.useEffect(() => {
    setTotalProducts(cartProducts.length);
  }, [cartProducts]);

  return (
    <NavbarStyled>
      <Container>
        <Navbar.Brand
          onClick={backHome}
          style={{ cursor: 'pointer' }}
        >
          <h2>
            Betterware
          </h2>
        </Navbar.Brand>
          <Nav>
          <NavbarLink 
            id="__ShoppingCart"
            total={totalProducts}
            path="shoppingcart"
          >
            <FaShoppingCart style={{ marginRight: '5px' }} /> 
          </NavbarLink>
          </Nav>
      </Container>
    </NavbarStyled>
  )
};