import BeansLogo from '../beans-logo/beans-logo';
import styled from 'styled-components';


const AboutUs = () => {
    return (
        <StyledAboutUS className='about-us'>
            <h3>About us</h3>
            <BeansLogoWrapper>
                <BeansLogo />
            </BeansLogoWrapper>
            <p>We carefully select premium beans, roast them to perfection, and craft every cup with love. Whether you’re here for a quiet moment or a lively chat, our coffee is brewed to make your day extraordinary.
                We believe in creating a warm and inviting space where the aroma of freshly brewed coffee greets you at the door. From rich espressos to creamy lattes, every sip is a celebration of flavor and passion. Come and be a part of our story – because great coffee brings people together.</p>
        </StyledAboutUS>
    )
}

const StyledAboutUS = styled.div`
    margin: 50px;
   p{
    width: 40%;
    margin: 0 auto;
   }
`;

const BeansLogoWrapper = styled.div`
   margin: 40px 0;
`;

export default AboutUs;