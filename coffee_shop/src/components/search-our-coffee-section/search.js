import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const SearchPanel = () => {
    return (
        <StyledSearchPanel>
            <h6>Looking for</h6>
            <Form inline>
                <Row>
                    <Col xs="auto">
                        <Form.Control
                            type="text"
                            placeholder="start typing here..."
                            className=" mr-sm-2"
                        />
                    </Col>
                </Row>
            </Form>
        </StyledSearchPanel>
    )
}

const StyledSearchPanel = styled.div`
    display: flex;
    align-items: center;
    h6{
        margin: auto 0;
    }
`;

export default SearchPanel;