import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavBar() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand}>

          <Container fluid>
        
          <Navbar.Brand href="/">
            <img
              alt="logo JO4marseille"
              src="logonoir.png"
              width="300"
              height="70"
              className="d-inline-block align-top logo"
            />
          </Navbar.Brand> 

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Nav>
            <Nav.Link className='transport' href="transport" ><img src="\img\logos\logoTransport.png" alt='logo transport ' />Transport  </Nav.Link>
            <Nav.Link className='hebergement' href="hebergements"><img src="\img\logos\logoHotel.png" alt='logo hotel'  />Où Dormir </Nav.Link>
            <Nav.Link className='restaurant' href="restauration"> <img src="\img\logos\logoResto.png" alt='logo restaurant' />Où Manger</Nav.Link>
            <Nav.Link className='sport' href="sport"><img  src="\img\logos\logoSalle.png" alt='logo sport' />Centre Sportifs </Nav.Link>

          </Nav>
          <img
              alt="Logo du site"
              src="\img\logos\MarseilleTerreAccueil.png"
              width="250"
              height="300"
              className="d-inline-block align-top logo logoMarseille"
            />{' '}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;