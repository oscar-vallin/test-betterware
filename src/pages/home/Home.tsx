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
  const { loading, error, success } = useSelector((state: AppState) => state.cartProduct);
  const stylesButton: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    marginBottom: '20px',
    fontWeight: '400'
  };
  
  const [products, setProducts] = React.useState<CartProduct[]>([]);
  const [showModal, setShowModal] = React.useState(false);
  const [modalDesc, setModalDesc] = React.useState('');
  const [showErrorMsg, setShowErrorMsg] = React.useState('');

  const addNewProductToCart = (data: CartProduct) => {
    dispatch(addProductToCartList(data));
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
  }, [error, success]);
  const renderProducts = () => {
    if (products.length) {
      return (
        <Row>
          {products.map((product, indexProduct) => (
            <Col sm="12" md="6" lg="4" key={indexProduct}>
              <CardStyled id='__CardProduct'>
                <img 
                  id='__ImgProduct'
                  className="d-block w-100"
                  src={product.img}
                  alt="First slide"
                /> 
                <Card.Body>
                  <Card.Title>
                    {product.name} 
                  </Card.Title>
                  <Card.Text>
                <span>{product.description}</span>
                <span>{product.price}</span>
              </Card.Text>
                </Card.Body>
                <Button
                  style={stylesButton}
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