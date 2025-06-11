import { useState, useRef, useEffect, ReactElement, useCallback, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import {
  FaVideo,
  FaStreetView,
  FaUndo,
  FaRedo,
  FaSmile,
  FaMale,
  FaShoePrints,
  FaSave,
  FaTimes,
  FaTshirt,
  FaHatCowboy,
  FaSocks,
} from 'react-icons/fa';
import { GiClothes } from 'react-icons/gi';

import { CameraState, ClothesState, RotateState } from './interfaces';

interface ToggleButtonProps {
  active: boolean;
}

interface ToggleOptionProps {
  active: boolean;
  onClick: () => void;
  children?: ReactNode;
}

interface ExtendendContainerProps {
  width: number;
}

interface ExtendendOptionProps {
  icon: ReactElement;
  children?: ReactNode;
}

interface OptionsProps {
  camera: CameraState;
  rotate: RotateState;
  clothes: ClothesState;
  handleSetClothes: (key: keyof ClothesState) => void;
  handleSetCamera: (key: keyof CameraState) => void;
  handleTurnAround: () => void;
  handleRotateLeft: () => void;
  handleRotateRight: () => void;
  handleSave: () => void;
  handleExit: () => void;
  enableExit: boolean;
}

const Container = styled.div`
  position: fixed;
  top: 50%;
  right: 24px;
  transform: translateY(-50%);
  
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 12px;
  
  padding: 16px;
  border-radius: 16px;
  background: linear-gradient(
    145deg,
    rgba(15, 23, 42, 0.8) 0%,
    rgba(30, 41, 59, 0.7) 100%
  );
  border: 1px solid rgba(71, 85, 105, 0.2);
  box-shadow: 
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  
  z-index: 10;
`;

const ToggleButton = styled.button<ToggleButtonProps>`
  height: 48px;
  width: 48px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  border: none;
  border-radius: ${(props: any) => props.theme.borderRadius?.lg || '12px'};
  
  background: ${({ active }) => 
    active 
      ? 'rgba(37, 99, 235, 0.9)' 
      : 'rgba(30, 41, 59, 0.8)'
  };
  
  color: ${({ active }) => 
    active 
      ? 'white' 
      : 'rgba(203, 213, 225, 0.9)'
  };
  
  border: 1px solid ${({ active }) => 
    active 
      ? 'rgba(37, 99, 235, 0.3)' 
      : 'rgba(51, 65, 85, 0.4)'
  };
  
  box-shadow: ${(props: any) => props.theme.shadows?.lg || '0 10px 15px -3px rgba(0, 0, 0, 0.1)'};
  
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: ${(props: any) => props.theme.shadows?.xl || '0 20px 25px -5px rgba(0, 0, 0, 0.1)'};
    
    background: ${({ active }) => 
      active 
        ? 'rgba(29, 78, 216, 1)' 
        : 'rgba(51, 65, 85, 0.9)'
    };
    
    color: ${({ active }) => 
      active 
        ? 'white' 
        : 'rgba(248, 250, 252, 1)'
    };
  }
  
  &:active {
    transform: translateY(0) scale(0.95);
  }
`;

const Option = styled.button`
  height: 48px;
  width: 48px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  border: none;
  border-radius: ${(props: any) => props.theme.borderRadius?.lg || '12px'};
  
  background: rgba(30, 41, 59, 0.8);
  color: rgba(203, 213, 225, 0.9);
  border: 1px solid rgba(51, 65, 85, 0.4);
  
  box-shadow: ${(props: any) => props.theme.shadows?.lg || '0 10px 15px -3px rgba(0, 0, 0, 0.1)'};
  
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: ${(props: any) => props.theme.shadows?.xl || '0 20px 25px -5px rgba(0, 0, 0, 0.1)'};
    background: rgba(51, 65, 85, 0.9);
    color: rgba(248, 250, 252, 1);
    border-color: rgba(71, 85, 105, 0.6);
  }
  
  &:active {
    transform: translateY(0) scale(0.95);
  }
`;

const ExtendedContainer = styled.div`
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 12px;
  overflow: visible;
  
  &:hover {
    .extended-panel {
      opacity: 1;
      transform: translateX(0);
      pointer-events: auto;
    }
  }
`;

const ExtendedIcon = styled.div`
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  color: rgba(203, 213, 225, 0.9);
  background: rgba(30, 41, 59, 0.8);
  border: 1px solid rgba(51, 65, 85, 0.4);
  transition: all 0.3s ease;
  z-index: 2;
  
  &:hover {
    background: rgba(51, 65, 85, 0.9);
    color: rgba(248, 250, 252, 1);
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const ExtendedPanel = styled.div`
  position: absolute;
  right: 51px;
  top: 0;
  height: 48px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 16px;
  
  opacity: 0;
  transform: translateX(-20px);
  transition: all 0.3s ease;
  pointer-events: none;
  z-index: 20;
`;

const ToggleOption: React.FC<ToggleOptionProps> = ({ children, active, onClick }) => {
  return (
    <ToggleButton type="button" active={active} onClick={onClick}>
      {children}
    </ToggleButton>
  );
};

const ExtendedOption: React.FC<ExtendendOptionProps> = ({ children, icon }) => {
  return (
    <ExtendedContainer>
      <ExtendedIcon>{icon}</ExtendedIcon>
      <ExtendedPanel className="extended-panel">
        {children}
      </ExtendedPanel>
    </ExtendedContainer>
  );
};

const Options: React.FC<OptionsProps> = ({
  camera,
  rotate,
  clothes,
  handleSetClothes,
  handleSetCamera,
  handleTurnAround,
  handleRotateLeft,
  handleRotateRight,
  handleExit,
  handleSave,
  enableExit
}) => {
  return (
    <Container>
      <ExtendedOption icon={<FaVideo size={20} />}>
        <ToggleOption active={camera.head} onClick={() => handleSetCamera('head')}>
          <FaSmile size={20} />
        </ToggleOption>
        <ToggleOption active={camera.body} onClick={() => handleSetCamera('body')}>
          <FaMale size={20} />
        </ToggleOption>
        <ToggleOption active={camera.bottom} onClick={() => handleSetCamera('bottom')}>
          <FaShoePrints size={20} />
        </ToggleOption>
      </ExtendedOption>
      <ExtendedOption icon={<GiClothes size={20} />}>
        <ToggleOption active={clothes.head} onClick={() => handleSetClothes('head')}>
          <FaHatCowboy size={20} />
        </ToggleOption>
        <ToggleOption active={clothes.body} onClick={() => handleSetClothes('body')}>
          <FaTshirt size={20} />
        </ToggleOption>
        <ToggleOption active={clothes.bottom} onClick={() => handleSetClothes('bottom')}>
          <FaSocks size={20} />
        </ToggleOption>
      </ExtendedOption>
      <Option onClick={handleTurnAround}>
        <FaStreetView size={20} />
      </Option>
      <ToggleOption active={rotate.left} onClick={handleRotateLeft}>
        <FaRedo size={20} />
      </ToggleOption>
      <ToggleOption active={rotate.right} onClick={handleRotateRight}>
        <FaUndo size={20} />
      </ToggleOption>
      <Option onClick={handleSave}>
        <FaSave size={20} />
      </Option>
      {enableExit &&
      <Option onClick={handleExit}>
        <FaTimes size={20} />
      </Option>}
      
    </Container>
  );
};

export default Options;
