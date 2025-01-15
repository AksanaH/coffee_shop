import CoffeeItemCountry from '../coffee-item-country/coffee-item-country';
import styled from 'styled-components';



const OurCoffeeTypes = ({ dataTypesCoffee }) => {

    const coffeeCards = dataTypesCoffee.map(item => {

        const { id, ...itemProps } = item;

        return (
            <CoffeeItemCountry key={id} {...itemProps} />
        )
    })

    return (
        <StyledCoffeeTypesSection>
            <CoffeeItemsWrapper>
                {coffeeCards}
            </CoffeeItemsWrapper>
        </StyledCoffeeTypesSection>
    )
}

const StyledCoffeeTypesSection = styled.div`
  //height: 500px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CoffeeItemsWrapper = styled.div`
    display: flex;
    justify-content:space-around;
    flex-wrap: wrap;
    width: 60%;
   img{
    height: 180px;
   }
`;

export default OurCoffeeTypes;