import { Alert, Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import './css/OrderModal.css';

const OrderModal = ({ showModal, onClose, onBuy, orderId }) => {

  return (
    <Modal show={showModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title className="modalTitle">FINALIZAR COMPRA</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="modalItem">Email:</Form.Label>
          <Form.Control type="email" placeholder="Ingrese email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="modalItem">Nombre:</Form.Label>
          <Form.Control type="text" placeholder="Ingrese nombre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="modalItem">Telefono:</Form.Label>
          <Form.Control type="text" placeholder="Ingrese telefono" />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        {!orderId && (
          <>
            <Button variant="secondary" onClick={onClose}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={onBuy}>
              Comprar
            </Button>
          </>
        )}
        {orderId && (
          <div className='footerOrderSuccess'>
            <Alert key='success' variant='success' className="modalAlert">
              N° DE ORDEN: {orderId}
            </Alert>
            <Link to='/'>
              <Button variant="success">
                Comprar nuevamente
              </Button>
            </Link>
          </div>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default OrderModal;