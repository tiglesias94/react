import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';
import "./NavBar.css"

const NavBar = () => {
  return (
    <>
      <Navbar className='navBar'>
        <Container>
          <Navbar.Brand className='navBrand'>
            <Nav.Link as={Link} to='/' style={{color: "whitesmoke", "font-size":"2rem"}} className='navTitle'>Entre Espigas</Nav.Link>
          </Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={Link}to='/category/individ' style={{color: "whitesmoke"}} className='navLink'>INDIVIDUALES</Nav.Link>
          <Nav.Link as={Link}to='/category/caja'  style={{color: "whitesmoke"}} className='navLink'>CAJAS</Nav.Link>
          </Nav>

          <CartWidget />

        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;