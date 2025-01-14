import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationPanel = () => {
    return (
        <Navbar>
            <Container>
                <img className="beans" src="../images/two_beans.png" alt="beans" />
                <Nav className="me-auto">
                    <Nav.Link href="#coffee_house">Coffee house</Nav.Link>
                    <Nav.Link href="#our_coffee">Our coffee</Nav.Link>
                    <Nav.Link href="#for_your_pleasure">For your pleasure</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationPanel;