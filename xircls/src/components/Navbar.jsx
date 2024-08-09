import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.png'

function Navbarx() {
    return (
        <div className='container-fluid border-bottom mx-3'>
            <div className=''>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand className="" href="#home">
                            <img
                                alt=""
                                src={logo}
                                width="180"
                                height="72"
                                className="mx-4 pt-auto"
                            />{' '}
                        </Navbar.Brand>


                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                            <Nav className=''>
                                <NavDropdown className="mx-3" title="Products" id="navbarScrollingDropdown">
                                    <NavDropdown.Item className="my-2 mx-5" href="#action5">
                                        SuperLeadz
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item className="my-2 mx-5" href="#action5">
                                        Flash Accounts
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item className="my-2 mx-5" href="#action5">
                                        Infiniti
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item className="my-2 mx-5" href="#action5">
                                        Semfer FI
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item className="my-2 mx-5" href="#action5">
                                        Sniper
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown className="mx-3" title="Company" id="navbarScrollingDropdown">

                                    <NavDropdown.Item className="my-2 mx-5" href="#action5">
                                        Why XIRCLS?
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item className="my-2 mx-5" href="#action5">
                                        Why collaborative marketing?
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item className="my-2 mx-5" href="#action5">
                                        Vision & Mission
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link className="mx-3" href="#about">Blog</Nav.Link>
                                <Nav.Link className="mx-3" href="#contact">Partners</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>

                        <Form className="d-flex mx-5 mr-5 px-5">
                            <Button className="mx-2" variant="primary">Signup Free</Button>{' '}
                            <Button className="mx-2" variant="outline-dark">Login</Button>
                        </Form>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
}

export default Navbarx;