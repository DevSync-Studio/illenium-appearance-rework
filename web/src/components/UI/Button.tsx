import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
}

const buttonVariants = {
  primary: css`
    background: ${(props: any) => props.theme.colors.primary};
    color: white;
    
    &:hover:not(:disabled) {
      background: ${(props: any) => props.theme.colors.primaryHover};
      transform: translateY(-1px);
    }
    
    &:active {
      transform: translateY(0);
    }
  `,
  
  secondary: css`
    background: ${(props: any) => props.theme.colors.surface};
    color: ${(props: any) => props.theme.colors.text.primary};
    border: 1px solid ${(props: any) => props.theme.colors.border};
    
    &:hover:not(:disabled) {
      background: ${(props: any) => props.theme.colors.surfaceHover};
      border-color: ${(props: any) => props.theme.colors.borderHover};
    }
  `,
  
  ghost: css`
    background: transparent;
    color: ${(props: any) => props.theme.colors.text.secondary};
    
    &:hover:not(:disabled) {
      background: ${(props: any) => props.theme.colors.surface};
      color: ${(props: any) => props.theme.colors.text.primary};
    }
  `,
  
  danger: css`
    background: ${(props: any) => props.theme.colors.error};
    color: white;
    
    &:hover:not(:disabled) {
      background: #dc2626;
      transform: translateY(-1px);
    }
  `
};

const buttonSizes = {
  sm: css`
    padding: ${(props: any) => props.theme.spacing.sm} ${(props: any) => props.theme.spacing.md};
    font-size: ${(props: any) => props.theme.typography.fontSize.sm};
    height: 32px;
  `,
  
  md: css`
    padding: ${(props: any) => props.theme.spacing.sm} ${(props: any) => props.theme.spacing.lg};
    font-size: ${(props: any) => props.theme.typography.fontSize.base};
    height: 40px;
  `,
  
  lg: css`
    padding: ${(props: any) => props.theme.spacing.md} ${(props: any) => props.theme.spacing.xl};
    font-size: ${(props: any) => props.theme.typography.fontSize.lg};
    height: 48px;
  `
};

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${(props: any) => props.theme.spacing.sm};
  
  border: none;
  border-radius: ${(props: any) => props.theme.borderRadius.md};
  
  font-family: inherit;
  font-weight: ${(props: any) => props.theme.typography.fontWeight.medium};
  
  cursor: pointer;
  transition: all ${(props: any) => props.theme.animation.duration.fast} ${(props: any) => props.theme.animation.easing.easeOut};
  
  &:focus {
    outline: 2px solid ${(props: any) => props.theme.colors.primary};
    outline-offset: 2px;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
  }
  
  ${(props: ButtonProps) => buttonVariants[props.variant || 'primary']}
  ${(props: ButtonProps) => buttonSizes[props.size || 'md']}
  
  ${(props: any) => props.fullWidth && css`
    width: 100%;
  `}
`;

export const IconButton = styled(Button)`
  padding: ${(props: any) => props.theme.spacing.sm};
  width: 40px;
  height: 40px;
  
  ${(props: any) => props.size === 'sm' && css`
    width: 32px;
    height: 32px;
    padding: ${props.theme.spacing.xs};
  `}
  
  ${(props: any) => props.size === 'lg' && css`
    width: 48px;
    height: 48px;
    padding: ${props.theme.spacing.md};
  `}
`;
