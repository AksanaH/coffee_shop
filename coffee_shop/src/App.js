import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';

const Header = () => {
  return <h1>Everything you love about coffee</h1>
}

const BeansLogo = () => {
  return <img className="beans_logo" src="../images/beans_logo.svg" alt="beans_logo" />
}

const Section = () => {
  return <h2>We make every day full of energy and taste! Would you like to try our beans?</h2>
}

const NameArticle = () => {
  return <h3>About us</h3>
}

const Article = () => {
  return <p>We carefully select premium beans, roast them to perfection, and craft every cup with love. Whether you’re here for a quiet moment or a lively chat, our coffee is brewed to make your day extraordinary.

    We believe in creating a warm and inviting space where the aroma of freshly brewed coffee greets you at the door. From rich espressos to creamy lattes, every sip is a celebration of flavor and passion. Come and be a part of our story – because great coffee brings people together.</p>
}

const StyledHeader = styled.div`
  background-image: url('/images/feshly-brewed--latte-coffee.jpg');
  height: 640px;
  background-size: cover;
`;

const StyledSection = styled.div`
  margin: 100px auto;
`;

const StyledApp = styled.div`
  text-align:center;
  font-family: cursive;
  h3{
    margin: 20px 0 0 0;
  }
`;

const StyledArticle = styled.div`
  width: 500px;
  margin: 0 auto;
`;

function App() {
  return (

    <StyledApp>
      <StyledHeader>
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
        <StyledSection>
          <Header />
          <BeansLogo />
          <Section />
        </StyledSection>
      </StyledHeader>
      <NameArticle />
      <BeansLogo />
      <StyledArticle>
        <Article />
      </StyledArticle>
    </StyledApp>

  );
}

export default App;
