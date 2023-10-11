export default interface ModalProps {
  isOpen: boolean;
  onAfterOpen: () => void;
  onRequestClose: () => void;
}
