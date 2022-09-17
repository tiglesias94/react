import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ENTRE ESPIGAS</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="#pricing">TIENDA</Nav.Link>
          <Nav.Link href="#pricing">CONTACTO</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;