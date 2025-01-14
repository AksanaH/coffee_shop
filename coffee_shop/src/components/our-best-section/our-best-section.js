import CoffeeItem from '../coffee-item/coffee-item';
import styled from 'styled-components';



const OurBestSection = () => {
    return (
        <StyledBestSection>
            <h3>Our best</h3>
            <CoffeeItemsWrapper>
                <CoffeeItem />
                <CoffeeItem />
                <CoffeeItem />
            </CoffeeItemsWrapper>
        </StyledBestSection>
    )
}

const StyledBestSection = styled.div`
  height: 400px;
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
   
`;

export default OurBestSection;