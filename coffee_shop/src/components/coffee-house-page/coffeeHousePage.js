import MainInfo from '../main-info-coffee-house-page/main-info';
import NavigationPanel from '../navbar/navbar';
import AboutUs from '../about-us-section-coffee-house-page/about-us';
import OurBestSection from '../our-best-section-coffee-house-page/our-best-section';
import Footer from '../footer/footer'
import styled from 'styled-components';

const CoffeeHousePage = () => {
    const data = [
        { name: "Solimo Coffee Beans 2lb", price: 15 + '$', src: "/images/solimo.jpg", id: 1 },
        { name: "Presto Coffee Beans 2lb", price: 11.5 + '$', src: "/images/presto.jpg", id: 2 },
        { name: "Aromisto Coffee Beans 2lb", price: 12.75 + '$', src: "/images/aromisto.jpg", id: 3 },
    ];
    return (
        <div className='app'>
            <StyledHeader>
                <NavigationPanel />
                <MainInfo />
            </StyledHeader>
            <AboutUs />
            <OurBestSection data={data} />
            <Footer />
        </div>
    );
};

const StyledHeader = styled.div`
  background-image: url('/images/feshly-brewed--latte-coffee.jpg');
  height: 640px;
  background-size: cover;
  width: 100%;
`;

export default CoffeeHousePage;