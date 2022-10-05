import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Nav.Link as={Link} to='/'>ENTRE ESPIGAS</Nav.Link>
          </Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={Link}to='/category/alfnegro'>Alfajor Negro</Nav.Link>
          <Nav.Link as={Link}to='/category/alfblanco'>Alfajor Blanco</Nav.Link>
          </Nav>

          <CartWidget />

        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;