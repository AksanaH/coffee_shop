import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const Filter = (props) => {
    const buttonData = [
        { name: 'all', label: 'All' },
        { name: 'colombia', label: 'Colombia' },
        { name: 'costarica', label: 'Costa Rica' },
        { name: 'brazil', label: 'Brazil' },

    ];

    const buttons = buttonData.map(({ name, label }) => {
        return (
            <Button variant="light" key={name} onClick={() => props.onFilterSelect(name)}>{label}</Button>
        )
    })

    return (
        <StyledFilter>
            <h6>Our filter</h6>
            {buttons}
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