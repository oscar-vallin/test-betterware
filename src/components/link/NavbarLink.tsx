import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

type NavBarLinkProps = {
  id: string;
  total?: number;
  path: string;
  children?: React.ReactNode;
};



export const NavbarLink = ({ id, total, path, children }: NavBarLinkProps) => {
  return (
    <Nav.Link
      id={id}
      className='navlink'
      as={Link}
      to={`/${path}`} 
      style={{ fontFamily: 'Poppins,sans-serif' }}
    >
      {children}
      {total}
    </Nav.Link>
  )
};