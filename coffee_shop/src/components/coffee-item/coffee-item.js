import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const CoffeeItem = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/images/solimo.jpg" />
            <Card.Body>
                <Card.Title>Solimo coffee beans 2lb</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>10.73$</ListGroup.Item>
            </ListGroup>
        </Card>
    )
}

export default CoffeeItem;
