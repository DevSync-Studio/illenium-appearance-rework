import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  children: string | ReactNode;
  margin?: string;
  width?: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  onClick: () => void;
}

const buttonVariants = {
  primary: css`
    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
    color: white;
    border: 1px solid rgba(37, 99, 235, 0.3);
    
    &:hover {
      background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%);
      box-shadow: 0 8px 16px rgba(37, 99, 235, 0.3);
      transform: translateY(-2px);
    }
  `,
  
  secondary: css`
    background: linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(51, 65, 85, 0.6) 100%);
    color: #f8fafc;
    border: 1px solid rgba(71, 85, 105, 0.4);
    
    &:hover {
      background: linear-gradient(135deg, rgba(51, 65, 85, 0.9) 0%, rgba(71, 85, 105, 0.7) 100%);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      transform: translateY(-2px);
    }
  `,
  
  danger: css`
    background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
    color: white;
    border: 1px solid rgba(239, 68, 68, 0.3);
    
    &:hover {
      background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
      box-shadow: 0 8px 16px rgba(239, 68, 68, 0.3);
      transform: translateY(-2px);
    }
  `,
  
  success: css`
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    color: white;
    border: 1px solid rgba(16, 185, 129, 0.3);
    
    &:hover {
      background: linear-gradient(135deg, #059669 0%, #047857 100%);
      box-shadow: 0 8px 16px rgba(16, 185, 129, 0.3);
      transform: translateY(-2px);
    }
  `
};

const CustomButton = styled.button<ButtonProps>`
  padding: 12px 20px;
  margin: ${props => props?.margin || "0px"};
  width: ${props => props?.width || "auto"};
  
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  text-align: center;
  
  border-radius: 10px;
  
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  
  position: relative;
  overflow: hidden;
  
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
      rgba(255, 255, 255, 0.2) 50%, 
      transparent 100%
    );
  }
  
  &:active {
    transform: translateY(0) scale(0.98);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
  }
  
  ${props => buttonVariants[props.variant || 'secondary']}
`;

const Button = ({ children, onClick, margin, width, variant = 'secondary' }: ButtonProps) => {
  return (
    <CustomButton 
      onClick={onClick} 
      margin={margin} 
      width={width} 
      variant={variant}
    >
      {children}
    </CustomButton>
  );
};

export default Button;
