import { Wrapper, ModalContainer, Buttons } from './styles';

interface ModalProps {
  title: string;
  description: string;
  accept: string;
  decline: string;
  handleAccept: () => Promise<void> | void;
  handleDecline: () => Promise<void> | void;
}

const Modal = ({ title, description, accept, decline, handleAccept, handleDecline }: ModalProps) => {
  return (
    <Wrapper>
      <ModalContainer>
        <p>{title}</p>
        <span>{description}</span>
        <Buttons>
          <button type="button" onClick={handleAccept}>
            {accept}
          </button>
          <button type="button" onClick={handleDecline}>
            {decline}
          </button>
        </Buttons>
      </ModalContainer>
    </Wrapper>
  );
};

export default Modal;
