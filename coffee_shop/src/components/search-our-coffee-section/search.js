import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onSearchUpdate = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onUpdateSearch(term)
    }

    render() {
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
                                value={this.state.term}
                                onChange={this.onSearchUpdate}
                            />
                        </Col>
                    </Row>
                </Form>
            </StyledSearchPanel>
        )
    }
}

const StyledSearchPanel = styled.div`
    margin: 30px;
    display: flex;
    align-items: center;
    h6{
        margin: auto 20px;
    }
`;

export default SearchPanel;