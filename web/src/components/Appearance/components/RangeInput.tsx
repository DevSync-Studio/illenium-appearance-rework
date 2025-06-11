import { useCallback, useRef } from 'react';
import styled from 'styled-components';

interface RangeInputProps {
  title?: string;
  min: number;
  max: number;
  factor?: number;
  defaultValue?: number;
  clientValue?: number;
  onChange: (value: number) => void;
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
  cursor: pointer;

  &:hover {
    background: linear-gradient(
      145deg,
      rgba(15, 23, 42, 0.6) 0%,
      rgba(30, 41, 59, 0.4) 100%
    );
    border-color: rgba(37, 99, 235, 0.3);
    transform: translateY(-1px);
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const Title = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #f8fafc;
  line-height: 1.4;
`;

const Value = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: #2563eb;
  background: rgba(37, 99, 235, 0.1);
  padding: 2px 8px;
  border-radius: 6px;
  border: 1px solid rgba(37, 99, 235, 0.2);
  min-width: 32px;
  text-align: center;
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
`;

const MinMaxLabel = styled.small`
  font-size: 11px;
  font-weight: 400;
  color: #94a3b8;
  min-width: 20px;
  text-align: center;
`;

const StyledSlider = styled.input<{ percentage: number }>`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  background: linear-gradient(
    to right,
    #2563eb 0%,
    #2563eb ${props => props.percentage}%,
    rgba(51, 65, 85, 0.4) ${props => props.percentage}%,
    rgba(51, 65, 85, 0.4) 100%
  );
  outline: none;
  border-radius: 8px;
  position: relative;
  transition: all 0.2s ease;

  &:hover {
    background: linear-gradient(
      to right,
      #1d4ed8 0%,
      #1d4ed8 ${props => props.percentage}%,
      rgba(71, 85, 105, 0.5) ${props => props.percentage}%,
      rgba(71, 85, 105, 0.5) 100%
    );
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    background: linear-gradient(145deg, #2563eb 0%, #1d4ed8 100%);
    cursor: pointer;
    border-radius: 50%;
    border: 2px solid #f8fafc;
    box-shadow: 
      0 2px 4px rgba(0, 0, 0, 0.1),
      0 0 0 1px rgba(37, 99, 235, 0.2);
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.1);
      background: linear-gradient(145deg, #1d4ed8 0%, #1e40af 100%);
      box-shadow: 
        0 4px 8px rgba(0, 0, 0, 0.15),
        0 0 0 2px rgba(37, 99, 235, 0.3);
    }

    &:active {
      transform: scale(1.05);
      box-shadow: 
        0 2px 4px rgba(0, 0, 0, 0.2),
        0 0 0 3px rgba(37, 99, 235, 0.4);
    }
  }

  &::-moz-range-thumb {
    width: 18px;
    height: 18px;
    background: linear-gradient(145deg, #2563eb 0%, #1d4ed8 100%);
    cursor: pointer;
    border-radius: 50%;
    border: 2px solid #f8fafc;
    box-shadow: 
      0 2px 4px rgba(0, 0, 0, 0.1),
      0 0 0 1px rgba(37, 99, 235, 0.2);
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.1);
      background: linear-gradient(145deg, #1d4ed8 0%, #1e40af 100%);
    }
  }
`;

const RangeInput: React.FC<RangeInputProps> = ({
  min,
  max,
  factor = 1,
  title,
  defaultValue = 1,
  clientValue,
  onChange,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  
  const percentage = ((defaultValue - min) / (max - min)) * 100;

  const handleContainerClick = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  const handleChange = useCallback(
    (e: { target: { value: string } }) => {
      const parsedValue = parseFloat(e.target.value);
      onChange(parsedValue);
    },
    [onChange],
  );

  return (
    <Container onClick={handleContainerClick}>
      <Header>
        <Title>{title || 'Setting'}</Title>
        <Value>{defaultValue}</Value>
      </Header>
      <SliderContainer>
        <MinMaxLabel>{min}</MinMaxLabel>
        <StyledSlider
          type="range"
          ref={inputRef}
          value={defaultValue}
          min={min}
          max={max}
          step={factor}
          percentage={percentage}
          onChange={handleChange}
        />
        <MinMaxLabel>{max}</MinMaxLabel>
      </SliderContainer>
    </Container>
  );
};

export default RangeInput;
