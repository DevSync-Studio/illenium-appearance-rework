import { useState, useEffect, useRef, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useSpring, animated } from 'react-spring';

interface SectionProps {
  title: string;
  deps?: any[];
  children?: ReactNode;
}

interface HeaderProps {
  active: boolean;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  user-select: none;
  
  & + & {
    margin-top: ${(props: any) => props.theme.spacing?.md || '16px'};
  }
`;

const Header = styled.div<HeaderProps>`
  width: 100%;
  min-height: 48px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: ${(props: any) => props.theme.spacing?.md || '16px'} ${(props: any) => props.theme.spacing?.lg || '24px'};
  border-radius: ${(props: any) => props.theme.borderRadius?.md || '8px'};
  
  background: ${({ active }: HeaderProps) => 
    active 
      ? 'rgba(37, 99, 235, 0.1)' 
      : 'rgba(30, 41, 59, 0.6)'
  };
  
  border: 1px solid ${({ active }: HeaderProps) => 
    active 
      ? 'rgba(37, 99, 235, 0.3)' 
      : 'rgba(51, 65, 85, 0.3)'
  };
  
  
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: ${({ active }: HeaderProps) => 
      active 
        ? 'rgba(37, 99, 235, 0.15)' 
        : 'rgba(51, 65, 85, 0.4)'
    };
    border-color: ${({ active }: HeaderProps) => 
      active 
        ? 'rgba(37, 99, 235, 0.4)' 
        : 'rgba(71, 85, 105, 0.5)'
    };
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(0);
  }

  span {
    font-size: ${(props: any) => props.theme.typography?.fontSize?.base || '16px'};
    font-weight: ${(props: any) => props.theme.typography?.fontWeight?.medium || 500};
    color: ${(props: any) => props.theme.colors?.text?.primary || '#f8fafc'};
  }
  
  svg {
    color: ${(props: any) => props.theme.colors?.text?.secondary || '#cbd5e1'};
    transition: transform 0.3s ease;
    
    ${({ active }: HeaderProps) => active && css`
      transform: rotate(180deg);
      color: ${(props: any) => props.theme.colors?.primary || '#2563eb'};
    `}
  }
`;

const Items = styled.div`
  padding: ${(props: any) => props.theme.spacing?.md || '16px'} ${(props: any) => props.theme.spacing?.sm || '8px'};
  margin-top: ${(props: any) => props.theme.spacing?.sm || '8px'};
  
  background: rgba(15, 23, 42, 0.4);
  border-radius: ${(props: any) => props.theme.borderRadius?.md || '8px'};
  border: 1px solid rgba(51, 65, 85, 0.2);
  
  overflow: hidden;
`;

const Section: React.FC<SectionProps> = ({ children, title, deps = [] }) => {
  const [active, setActive] = useState(false);

  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const props = useSpring({
    height: active ? height : 0,
    opacity: active ? 1 : 0,
  });

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.offsetHeight);
    }
  }, [ref, setHeight]);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.offsetHeight);
    }
  }, [ref, setHeight, deps]);

  return (
    <Container>
      <Header active={active} onClick={() => setActive(state => !state)}>
        <span>{title}</span>
        {active ? <FiChevronUp size={30} /> : <FiChevronDown size={30} />}
      </Header>

      <animated.div style={{ ...props, overflow: 'hidden' }}>
        <Items ref={ref}>{children}</Items>
      </animated.div>
    </Container>
  );
};

export default Section;
