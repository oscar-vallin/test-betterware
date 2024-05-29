import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const CardStyled = styled(Card)`
  border-radius: 20px; 
  box-shadow: 0 4px 8px #666666;
  max-width: 300px;
  margin: 0 auto;
  margin-bottom: 40px;
  

  img {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    max-height: 200px;
    max-width: 300px;

  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

export const TextContainer = styled(Card.Text)`
  display: flex;
  flex-direction: column;
`;
