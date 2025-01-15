import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavigationPanel = () => {
    return (
        <Navbar>
            <Container>
                <img className="beans" src="../images/two_beans.png" alt="beans" />
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Coffee house</Nav.Link>
                    <Nav.Link as={Link} to="/our_coffee">Our coffee</Nav.Link>
                    <Nav.Link href="#for_your_pleasure">For your pleasure</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationPanel;