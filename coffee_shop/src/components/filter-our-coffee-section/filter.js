import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const Filter = () => {
    return (
        <StyledFilter>
            <h6>Our filter</h6>
            <Button variant="light">Colombia</Button>
            <Button variant="light">Brazil</Button>
            <Button variant="light">Costa Rica</Button>
        </StyledFilter>
    )
}

const StyledFilter = styled.div`
    margin: 30px;
    display: flex;
    align-items: center;
    h6{
        margin: auto 0;
    }
    button{
        margin: 0 10px;
    }
`;

export default Filter;