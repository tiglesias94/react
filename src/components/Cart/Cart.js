import { useContext, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import CartContext from "../../context/cartContext";
import { Link } from "react-router-dom";
import OrderModal from "../Modal";
import { createOrder } from "../../utils/orders";
import { getCurrentDate } from "../../utils/getCurrentDate";
import "./Cart.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const currentDate = getCurrentDate();


const buyerMock = {
  name: 'coderhouse',
  phone: '1122334455',
  email: 'coderhouse@mail.com'
}

const Cart = () => {
  const { cart, total, removeItem, clear } = useContext(CartContext);
  const [user, setUser] = useState(buyerMock);
  const [showModal, setShowModal] = useState(false);
  const [orderId, setOrderId] = useState();

  const handleRemove = (itemId) => {
    removeItem(itemId);
  }

  const handleOpen = () => setShowModal(true);

  const handleClose = () => setShowModal(false);

  const handleBuy = async () => {
    const newOrder = {
      buyer: buyerMock,
      items: cart,
      total
    };
    const newOrderId = await createOrder(newOrder);
    setOrderId(newOrderId);
    clear();
  }

  const showTable = cart.length > 0
  return (
    <div className='cartContainer'>
      <h1 className="cartTitle">RESUMEN DE PEDIDO</h1>
      {showTable && (
        <>
          <Table variant="dark" striped borderless hover className="Table">
            <thead>
              <tr>
                <th className="tableText">PRODUCTO</th>
                <th className="tableText">PRECIO UNITARIO</th>
                <th className="tableText">CANTIDAD</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td className="tableText2">{item.title}</td>
                    <td className="tableText2">{item.price}</td>
                    <td className="tableText2">{item.quantity}</td>
                    <td><a onClick={() => handleRemove(item.id)}><i class="fa-solid fa-trash fa-lg"></i></a></td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <h3 className="cartTitle">Total: $ {total}</h3>
          <Button variant="success" onClick={handleOpen}>Finalizar compra</Button>
        </>
      )}
      {!showTable && (
        <>
          <h3>Carrito de compra vacio</h3>
          <Link to='/'>
            <Button variant="success">Ver productos</Button>
          </Link>
        </>
      )}
      <OrderModal
        showModal={showModal}
        onClose={handleClose}
        onBuy={handleBuy}
        orderId={orderId}
      />
    </div>
  );
}
 
export default Cart;