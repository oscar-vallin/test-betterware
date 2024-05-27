import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

type NavBarLinkProps = {
  id: string;
  text?: string;
  icon?: string;
  path: string;
  children?: React.ReactNode;
};



export const NavbarLink = ({ id, text, path, children, icon }: NavBarLinkProps) => {
  return (
    <Nav.Link
      className='navlink'
      as={Link}
      to={`/${path}`} 
      style={{ fontFamily: 'Poppins,sans-serif' }}
      id={id}
    >
      {text}
      {icon}
      {children}
    </Nav.Link>
  )
};