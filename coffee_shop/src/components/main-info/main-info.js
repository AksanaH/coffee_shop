import BeansLogo from '../beans-logo/beans-logo';
import styled from 'styled-components';

const MainInfo = () => {
    return (
        <StyledMainInfo className='main-info'>
            <h1>Everything you love about coffee</h1>
            <BeansLogoWrapper>
                <BeansLogo />
            </BeansLogoWrapper>
            <h2>We make every day full of energy and taste! Would you like to try our beans?</h2>
        </StyledMainInfo>
    )
}
const StyledMainInfo = styled.div`
   margin: 100px 0;
`;

const BeansLogoWrapper = styled.div`
   margin-bottom: 40px;
`;

export default MainInfo;