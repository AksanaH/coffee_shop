import { Component } from 'react';
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


class OurCoffeePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataTypesCoffee: [
                { name: "Solimo Coffee Beans 2lb", price: 15 + '$', src: "/images/solimo.jpg", country: "Colombia", id: 1 },
                { name: "Presto Coffee Beans 2lb", price: 11.5 + '$', src: "/images/presto.jpg", country: "Colombia", id: 2 },
                { name: "Aromisto Coffee Beans 2lb", price: 12.75 + '$', src: "/images/aromisto.jpg", country: "Brazil", id: 3 },
                { name: "Lovemo Coffee Beans 2lb", price: 10.95 + '$', src: "/images/lovemo.jpg", country: "Costa Rica", id: 4 },
                { name: "Rocket Coffee Beans 2lb", price: 12.5 + '$', src: "/images/rocket.jpg", country: "Colombia", id: 5 },
                { name: "Amino Coffee Beans 2lb", price: 15.65 + '$', src: "/images/amino.jpg", country: "Costa Rica", id: 6 },
            ],
            term: '',
            filter: ''
        }
    }

    searchCoffee = (items, term) => {
        if (term.trim().length === 0) {
            return items;
        }
        const lowercasedTerm = term.toLowerCase();
        return items.filter(item => {
            return item.name.toLowerCase().includes(lowercasedTerm);
        })
    }

    onUpdateSearch = (term) => {
        this.setState({ term });
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'colombia':
                return items.filter(item => item.country === "Colombia");
            case 'costarica':
                return items.filter(item => item.country === "Costa Rica");
            case 'brazil':
                return items.filter(item => item.country === "Brazil");
            default:
                return items

        }
    }

    onFilterSelect = (filter) => {
        this.setState({ filter });
    }

    render() {
        const { dataTypesCoffee, term, filter } = this.state;
        const visibleData = this.filterPost(this.searchCoffee(dataTypesCoffee, term), filter);
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
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <Filter filter={filter} onFilterSelect={this.onFilterSelect} />
                </StyledFilterWithSearch>
                <OurCoffeeTypes dataTypesCoffee={visibleData} />
                <Footer />
            </div>
        );
    }
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
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;


export default OurCoffeePage;