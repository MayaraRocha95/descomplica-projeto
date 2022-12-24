import { Button } from '../Button/Button';
import ModalBS from 'react-bootstrap/Modal';


export const Modal = ({ title, children, open, controls = []  }) => {
  return (
    <ModalBS show={open} onHide={() => {}}>
    <ModalBS.Header closeButton>
      <ModalBS.Title>{title}</ModalBS.Title>
    </ModalBS.Header>
    <ModalBS.Footer>
    <ModalBS.Body>{children}</ModalBS.Body>
    {controls.map((control, controlIndex) => (
      <Button
       key={controlIndex}
       variant={control.variant}
       onClick={control.onClick}
       label={control.label}
       loadingLabel={control.loadingLabel}
       loading={control.loading}
       disabled={control.disabled}
        />
       
    
    ))}
      
      
    </ModalBS.Footer>
  </ModalBS>
  );
}