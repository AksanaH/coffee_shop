import NavigationPanel from '../navbar/navbar';
import Footer from '../footer/footer'
import Title from '../title-our-coffee-page/title-our-coffee-page'
import Picture from '../picture-section-our-coffee-page/picture-section'
import AboutOurBeans from '../about-our-beans-section-our-coffee-section/about-our-beans'
import BeansLogo from '../beans-logo/beans-logo';
import SearchPanel from '../search-our-coffee-section/search';
import Filter from '../filter-our-coffee-section/filter';
import OurCoffeeTypes from '../our-coffes-types-our-coffee-page/our-coffees-types'

import styled from 'styled-components';


const OurCoffeePage = () => {
    const dataTypesCoffee = [
        { name: "Solimo Coffee Beans 2lb", price: 15 + '$', src: "/images/solimo.jpg", county: "Colombia", id: 1 },
        { name: "Presto Coffee Beans 2lb", price: 11.5 + '$', src: "/images/presto.jpg", county: "Colombia", id: 2 },
        { name: "Aromisto Coffee Beans 2lb", price: 12.75 + '$', src: "/images/aromisto.jpg", county: "Brazil", id: 3 },
        { name: "Lovemo Coffee Beans 2lb", price: 10.95 + '$', src: "/images/lovemo.jpg", county: "Costa Rica", id: 4 },
        { name: "Rocket Coffee Beans 2lb", price: 12.5 + '$', src: "/images/rocket.jpg", county: "Costa Rica", id: 5 },
        { name: "Amino Coffee Beans 2lb", price: 15.65 + '$', src: "/images/amino.jpg", county: "Costa Rica", id: 6 },
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
            <StyledFilterWithSearch>
                <SearchPanel />
                <Filter />
            </StyledFilterWithSearch>
            <OurCoffeeTypes dataTypesCoffee={dataTypesCoffee} />
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

const StyledFilterWithSearch = styled.div`
    display: flex;
    //width: 60%;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;


export default OurCoffeePage;