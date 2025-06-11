import styled from 'styled-components';
import { ReactNode } from 'react';

interface ItemProps {
  title?: string;
  children?: ReactNode;
}

const Container = styled.div`
  width: 100%;
  padding: 16px;
  background: linear-gradient(
    145deg,
    rgba(15, 23, 42, 0.4) 0%,
    rgba(30, 41, 59, 0.3) 100%
  );
  border: 1px solid rgba(51, 65, 85, 0.2);
  border-radius: 12px;
  margin-bottom: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(
      145deg,
      rgba(15, 23, 42, 0.6) 0%,
      rgba(30, 41, 59, 0.4) 100%
    );
    border-color: rgba(37, 99, 235, 0.3);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  /* Modern glassmorphism effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(255, 255, 255, 0.1) 50%, 
      transparent 100%
    );
    border-radius: 12px 12px 0 0;
  }
`;

const Title = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #f8fafc;
  line-height: 1.4;
  margin-bottom: 12px;
  display: block;
`;

const Inputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  > div {
    margin: 0;
  }
`;

const Item: React.FC<ItemProps> = ({ children, title }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <Inputs>{children}</Inputs>
    </Container>
  );
};

export default Item;
