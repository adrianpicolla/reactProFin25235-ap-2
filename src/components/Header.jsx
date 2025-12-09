import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>       
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="https://via.placeholder.com/60" 
            alt="img"
            className="d-inline-block align-top me-2"
          />
          <span>Materiales Del Parque</span>
        </Navbar.Brand>

        <Nav className="ms-auto align-items-center">
          <Nav.Link as={Link} to="/" className="me-3">Home</Nav.Link>
          <Nav.Link as={Link} to="/ofertas" className="me-3">Ofertas</Nav.Link>
          <Nav.Link as={Link} to="/infaltables" className="me-3">Promos</Nav.Link>

          <Dropdown>
            <Dropdown.Toggle  id="dropdown-basic" className="me-3" >
              Rubros
            </Dropdown.Toggle>

            <Dropdown.Menu className="text-black">
              <Nav.Link as={Link} to="/alban" className="me-3 text-black">Albañileria</Nav.Link>
              <Nav.Link as={Link} to="/acero" className="me-3 text-black">Acero</Nav.Link>
              <Nav.Link as={Link} to="/electricidad" className="me-3 text-black">Electricidad</Nav.Link>
              <Nav.Link as={Link} to="/constSeco" className="me-3 text-black">Construcción en seco</Nav.Link>
            </Dropdown.Menu>
          </Dropdown>

          <div className="d-flex align-items-center">
            <Button variant="outline-light" as={Link} to="/administracion" className="me-2">
              Administración
            </Button>
            <Link to="/carrito" className="text-white">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            </Link>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
