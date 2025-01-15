import styled from 'styled-components';

const Title = () => {
    return (
        <StyledTitle className='main-info'>
            <h1>Our coffee</h1>
        </StyledTitle>
    )
}
const StyledTitle = styled.div`
   margin: 20px 0;
   color: white;
`;

export default Title;