import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import BeansLogo from '../beans-logo/beans-logo'


const Footer = () => {
    return (
        <FooterWrapper>
            <Navbar>
                <Container>
                    <StyledBeans className="beans" src="../images/two_beans.png" alt="beans" />
                    <Nav className="me-auto">
                        <Nav.Link href="#coffee_house">Coffee house</Nav.Link>
                        <Nav.Link href="#our_coffee">Our coffee</Nav.Link>
                        <Nav.Link href="#for_your_pleasure">For your pleasure</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <BeansLogoWrapper>
                <BeansLogo />
            </BeansLogoWrapper>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

const StyledBeans = styled.img`
   filter: invert(1) grayscale(1);
   width: auto;
`;

const BeansLogoWrapper = styled.div`
   margin-bottom: 20px;
`;
export default Footer;