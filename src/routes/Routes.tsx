import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavbarSection } from '../layout';
import { Home, ShoppingCart } from '../pages/index';

export const RouteController = () => {
  return (
  <Router>
    <NavbarSection />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/shoppingcart' element={<ShoppingCart />}/>
    </Routes>
  </Router>
  )
};
