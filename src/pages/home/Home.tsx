import * as React from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { CardStyled } from './home.styles';
import { FaShoppingCart } from 'react-icons/fa';

type ProductProps = {
  name: string;
  price: string;
  description: string;
};

export const Home = () => {
  const [products, setProducts] = React.useState<ProductProps[]>([]);
  const renderProducts = () => {
    if (products.length) {
      return (
        <Row>
          {products.map((product, indexProduct) => (
            <Col  md="12" lg="6" key={indexProduct}>
              <CardStyled>
                {/* <img /> */}
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
                  style={{ margin: '0 auto', marginBottom: '20px', fontWeight: '400' }}
                  variant="info"
                >
                  Agregar al carrito
                  <FaShoppingCart style={{ marginRight: '5px' }} /> 
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
    <Container>
      <Row>
        {renderProducts()}
      </Row>
    </Container>
  )
}