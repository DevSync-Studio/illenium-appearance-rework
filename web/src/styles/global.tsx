import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

export default createGlobalStyle<{theme: Theme}>`

  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  
  html {
    font-size: 16px;
  }
  
  body {
    background: transparent;
    font-family: ${props => props.theme.typography.fontFamily}, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: ${props => props.theme.typography.fontSize.base};
    line-height: ${props => props.theme.typography.lineHeight.normal};
    color: ${props => props.theme.colors.text.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
  }

  button {
    cursor: pointer;
    outline: 0;
    border: none;
    background: none;
    font-family: inherit;
    transition: all ${props => props.theme.animation.duration.fast} ${props => props.theme.animation.easing.easeOut};
  }
  
  input, select, textarea {
    font-family: inherit;
    outline: 0;
  }
  
  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }
  
  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.surface};
    border-radius: ${props => props.theme.borderRadius.full};
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.secondary};
    border-radius: ${props => props.theme.borderRadius.full};
    
    &:hover {
      background: ${props => props.theme.colors.text.muted};
    }
  }
  
  /* Selection */
  ::selection {
    background: ${props => props.theme.colors.primary};
    color: white;
  }
`;
