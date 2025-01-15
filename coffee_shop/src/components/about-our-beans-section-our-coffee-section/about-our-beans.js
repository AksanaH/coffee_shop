import BeansLogo from '../beans-logo/beans-logo';
import styled from 'styled-components';


const AboutOurBeans = () => {
    return (
        <StyledAboutOurBeans className='about-our-beans'>
            <h3>About our beans</h3>
            <BeansLogoWrapper>
                <BeansLogo />
            </BeansLogoWrapper>
            <p>We source our coffee beans from the finest farms around the world, ensuring every batch is rich in quality and flavor. Grown in ideal climates and harvested with care, our beans are meticulously selected for their unique characteristics and distinct taste profiles. Whether it’s a bold, full-bodied roast or a smooth, aromatic blend, we believe in honoring the journey of every bean – from the farm to your cup. Experience the difference that premium coffee beans can make with every sip.</p>
        </StyledAboutOurBeans>
    )
}

const StyledAboutOurBeans = styled.div`
    margin: 50px 0;
   p{
    width: 40%;
    margin: 0 auto;
   }
`;

const BeansLogoWrapper = styled.div`
   margin: 10px 0;
`;

export default AboutOurBeans;