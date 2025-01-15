import CoffeeItem from '../coffee-item/coffee-item';
import styled from 'styled-components';



const OurBestSection = ({ data }) => {

    const coffeeCards = data.map(item => {

        const { id, ...itemProps } = item;

        return (
            <CoffeeItem key={id} {...itemProps} />
        )
    })

    return (
        <StyledBestSection>
            <h3>Our best</h3>
            <CoffeeItemsWrapper>
                {coffeeCards}
            </CoffeeItemsWrapper>
        </StyledBestSection>
    )
}

const StyledBestSection = styled.div`
  height: 500px;
  background-image: url('/images/background.jpg');
  background-size: cover;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CoffeeItemsWrapper = styled.div`
    display: flex;
    justify-content:space-around;
    width: 80%;
   img{
    height: 180px;
   }
`;

export default OurBestSection;