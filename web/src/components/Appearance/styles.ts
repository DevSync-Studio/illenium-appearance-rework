import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: hidden;
`;

export const Container = styled.div`
  height: auto;
  min-height: 400px;
  max-height: 85vh;
  width: 400px;
  max-width: 28vw;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  
  padding: ${(props: any) => props.theme.spacing?.xl || '32px'} ${(props: any) => props.theme.spacing?.lg || '24px'};
  padding-right: ${(props: any) => `calc(${props.theme.spacing?.lg || '24px'} + 8px)`};
  margin: 16px;
  border-radius: 16px;
  
  transition: all 0.3s ease;
  
  background: linear-gradient(
    145deg,
    rgba(15, 23, 42, 0.95) 0%,
    rgba(30, 41, 59, 0.85) 100%
  );
  border: 1px solid rgba(71, 85, 105, 0.2);
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.25),
    0 0 0 1px rgba(255, 255, 255, 0.05);
  
  overflow-y: overlay;
  overflow-x: hidden;
  
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
  }
  
  /* Custom scrollbar - overlay style to prevent layout shift */
  scrollbar-width: thin;
  scrollbar-color: rgba(37, 99, 235, 0.6) transparent;
  
  ::-webkit-scrollbar {
    width: 8px;
    background: transparent;
  }
  
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(
      180deg,
      rgba(37, 99, 235, 0.6) 0%,
      rgba(29, 78, 216, 0.8) 100%
    );
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    
    &:hover {
      background: linear-gradient(
        180deg,
        rgba(37, 99, 235, 0.8) 0%,
        rgba(29, 78, 216, 1) 100%
      );
    }
  }
  
  /* Force overlay scrollbar on webkit browsers */
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
  
  /* Smooth scrolling */
  scroll-behavior: smooth;
`;

export const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: ${(props: any) => props.theme.spacing?.md || '16px'};
  
  > div {
    flex: 1;
  }
`;

export const SectionGrid = styled.div`
  display: grid;
  gap: ${(props: any) => props.theme.spacing?.md || '16px'};
  width: 100%;
`;

export const HeaderSection = styled.div`
  padding-bottom: ${(props: any) => props.theme.spacing?.lg || '24px'};
  border-bottom: 1px solid rgba(51, 65, 85, 0.3);
  margin-bottom: ${(props: any) => props.theme.spacing?.lg || '24px'};
`;

export const SectionTitle = styled.h2`
  font-size: ${(props: any) => props.theme.typography?.fontSize?.xl || '20px'};
  font-weight: ${(props: any) => props.theme.typography?.fontWeight?.semibold || 600};
  color: ${(props: any) => props.theme.colors?.text?.primary || '#f8fafc'};
  margin: 0 0 ${(props: any) => props.theme.spacing?.sm || '8px'} 0;
  line-height: ${(props: any) => props.theme.typography?.lineHeight?.tight || 1.25};
`;

export const SectionDescription = styled.p`
  font-size: ${(props: any) => props.theme.typography?.fontSize?.sm || '14px'};
  color: ${(props: any) => props.theme.colors?.text?.secondary || '#cbd5e1'};
  margin: 0;
  line-height: ${(props: any) => props.theme.typography?.lineHeight?.normal || 1.5};
`;
