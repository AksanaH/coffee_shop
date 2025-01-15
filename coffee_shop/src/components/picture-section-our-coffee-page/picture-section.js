import styled from 'styled-components';


const Picture = () => {
    return (
        <StyledPicture>
            <img className="cup_of_coffee" src="../images/cup_of_coffee.jpg" alt="cup_of_coffee" />
        </StyledPicture>
    )
}

const StyledPicture = styled.div`
margin: 50px 0;
img{
    height: 350px;
    width: 270px;
}
`;
export default Picture;