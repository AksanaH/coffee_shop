import NavigationPanel from '../navbar/navbar';
import Footer from '../footer/footer'
import Title from '../title-our-coffee-page/title-our-coffee-page'
import Picture from '../picture-section-our-coffee-page/picture-section'
import AboutOurBeans from '../about-our-beans-section-our-coffee-section/about-our-beans'
import BeansLogo from '../beans-logo/beans-logo';
import SearchPanel from '../search-our-coffee-section/search'


import styled from 'styled-components';


const OurCoffeePage = () => {
    const data = [
        { name: "Solimo Coffee Beans 2lb", price: 15 + '$', src: "/images/solimo.jpg", id: 1 },
        { name: "Presto Coffee Beans 2lb", price: 11.5 + '$', src: "/images/presto.jpg", id: 2 },
        { name: "Aromisto Coffee Beans 2lb", price: 12.75 + '$', src: "/images/aromisto.jpg", id: 3 },
    ];
    return (
        <div className='app'>
            <StyledHeader>
                <NavigationPanel />
                <Title />
            </StyledHeader>
            <StyledSection>
                <Picture />
                <AboutOurBeans />
            </StyledSection>
            <BeansLogo />
            <SearchPanel />
            <Footer />
        </div>
    );
};

const StyledHeader = styled.div`
  background-image: url('/images/cup_of_coffee_on_a_table.jpg');
  height: 200px;
  background-size: cover;
  width: 100%;
  a{
    color: white;
  }
`;

const StyledSection = styled.div`
    display: flex;
    width: 60%;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
`;



export default OurCoffeePage;