import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavbarStyled } from './navbar.styles';
import { NavbarLink } from '../components/link';

export const NavbarSection = () => {
  return (
    <NavbarStyled>
      <Container>
        <Navbar.Brand>
          <h2>
            Betterware
          </h2>
        </Navbar.Brand>
          <Nav>
          <NavbarLink 
              id="__ShoppingCart"
              text='Cart'
              path="aboutme"
            />
          </Nav>
      </Container>
    </NavbarStyled>
  )
};