import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

type ModalProps = {
  isVisible: boolean;
  text: string;
  onClose: () => void;
};

export const CustomModal = ({ isVisible, onClose, text}: ModalProps) => {
  return (
    <Modal show={isVisible} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{text}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Link to='/shoppingcart'>
          Go to Shopping Cart
          <FaShoppingCart style={{ marginLeft: '5px' }} />
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

