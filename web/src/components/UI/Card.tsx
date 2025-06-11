import styled from 'styled-components';
import { Theme } from '../../styles/theme';

interface CardProps {
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: keyof Theme['spacing'];
}

export const Card = styled.div<CardProps>`
  background: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.padding ? props.theme.spacing[props.padding] : props.theme.spacing.md};
  transition: all ${props => props.theme.animation.duration.normal} ${props => props.theme.animation.easing.easeOut};
  
  ${props => props.variant === 'elevated' && `
    box-shadow: ${props.theme.shadows.md};
    
    &:hover {
      box-shadow: ${props.theme.shadows.lg};
      transform: translateY(-2px);
    }
  `}
  
  ${props => props.variant === 'outlined' && `
    border: 1px solid ${props.theme.colors.border};
    
    &:hover {
      border-color: ${props.theme.colors.borderHover};
    }
  `}
  
  ${props => props.variant === 'default' && `
    &:hover {
      background: ${props.theme.colors.surfaceHover};
    }
  `}
  
  & + & {
    margin-top: ${props => props.theme.spacing.sm};
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.spacing.md};
  padding-bottom: ${props => props.theme.spacing.sm};
  border-bottom: 1px solid ${props => props.theme.colors.border};
`;

export const CardTitle = styled.h3`
  font-size: ${props => props.theme.typography.fontSize.lg};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.text.primary};
  margin: 0;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
`;
