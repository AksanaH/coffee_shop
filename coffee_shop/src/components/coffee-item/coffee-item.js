import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const CoffeeItem = ({ name, price, src }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={src} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>{price}</ListGroup.Item>
            </ListGroup>
        </Card>
    )
}

export default CoffeeItem;
