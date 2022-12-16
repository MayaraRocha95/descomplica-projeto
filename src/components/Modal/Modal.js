import { Button } from '../Button/Button';
import Modal from 'react-bootstrap/Modal';


export const ModalCard = ({ title, children, open, controls = []  }) => {
  return (
    <Modal show={open} onHide={() => {}}>
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Footer>
    <Modal.Body>{children}</Modal.Body>
    {controls.map((control, controlIndex) => (
      <Button
       key={controlIndex}
       variant={control.variant}
       onClick={control.onClick}
       label="Salvar"
       loadingLabel="Salvando"
       loading={true}
        disable={true}
        />
       
    
    ))}
      
      
    </Modal.Footer>
  </Modal>
  );
}