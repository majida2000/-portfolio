import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavbarCom(){
  return(
    <Navbar bg="light" expand="lg" ms-auto style={{ color: '#085080'}}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/">Accueil</Nav.Link>
          <Nav.Link as={Link} to="/formation">Formation</Nav.Link>
          <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
          <Nav.Link as={Link} to="/certificats">Certificats</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarCom;