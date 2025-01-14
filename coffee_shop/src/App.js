import './App.css';

import styled from 'styled-components';
import NavigationPanel from './components/navbar/navbar';
import MainInfo from './components/main-info/main-info';
import AboutUs from './components/about-us-section/about-us';
import OurBestSection from './components/our-best-section/our-best-section';
import Footer from './components/footer/footer'

function App() {
  return (
    <div className='app'>
      <StyledHeader>
        <NavigationPanel />
        <MainInfo />
      </StyledHeader>
      <AboutUs />
      <OurBestSection />
      <Footer />
    </div>
  );
}


const StyledHeader = styled.div`
  background-image: url('/images/feshly-brewed--latte-coffee.jpg');
  height: 640px;
  background-size: cover;
  width: 100%;
`;

export default App;
