import * as React from 'react';
import { Container, Row, Col, Card, Button, Alert, Spinner } from "react-bootstrap"
import { CardStyled, SpinnerContainer } from './home.styles';
import { FaShoppingCart } from 'react-icons/fa';
import { CustomModal } from '../../components';
// import redux
import { useDispatch, useSelector } from 'react-redux';
import { AppState, CartProduct } from '../../redux/types/state';

//get products
import { listOfProducts } from '../../data/products';
import { addProductToCartList } from '../../redux/actions/cartProductAction';

export const Home = () => {
  const dispatch = useDispatch();
  const { cartProducts, loading, error, success } = useSelector((state: AppState) => state.cartProduct);
  
  const [products, setProducts] = React.useState<CartProduct[]>([]);
  const [showModal, setShowModal] = React.useState(false);
  const [modalDesc, setModalDesc] = React.useState('');
  const [showErrorMsg, setShowErrorMsg] = React.useState('');

  const addNewProductToCart = (data: CartProduct) => {

    const currentProduct = cartProducts.find((cp) => cp.name === data.name);

    if (currentProduct) {
      setModalDesc('This product i already exist in cart shopping');
      setShowModal(true);
    } else {
      dispatch(addProductToCartList(data));
    }
  };

  const closeModal = () => setShowModal(false);

  React.useEffect(() => {
    setProducts(listOfProducts);
  },[]);

  React.useEffect(() => {
    if (success) {
      setModalDesc('The product has been added successfully');
      setShowModal(true);
    }
    if (error) {
      setShowErrorMsg('There was an error to add the product');
    }
  }, [loading, error, success])
  const renderProducts = () => {
    if (products.length) {
      return (
        <Row>
          {products.map((product, indexProduct) => (
            <Col sm="12" md="6" lg="4" key={indexProduct}>
              <CardStyled>
                <img 
                  className="d-block w-100"
                  src={product.img}
                  alt="First slide"
                /> 
                <Card.Body>
                  <Card.Title>
                    {product.name} 
                  </Card.Title>
                  <Card.Text>
                <p>{product.description}</p>
                <p>{product.price}</p>
              </Card.Text>
                </Card.Body>
                <Button
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: '0 auto',
                    marginBottom: '20px',
                    fontWeight: '400'
                  }}
                  variant="info"
                  onClick={() => addNewProductToCart(product)}
                >
                  Add to Shopping Cart
                  <FaShoppingCart style={{ marginLeft: '5px' }} /> 
                </Button>
              </CardStyled>
            </Col>
          ))}
        </Row>
      )
    }
    return null;
  }
  return (
    <Container >
      {loading && <SpinnerContainer>
        <Spinner animation="border" role="status">
          </Spinner>
        </SpinnerContainer>}
      {showErrorMsg && <Alert variant="danger">{error}</Alert>}
      {renderProducts()}
      <CustomModal 
        isVisible={showModal}
        onClose={closeModal}
        text={modalDesc}
      />
    </Container>
  )
}