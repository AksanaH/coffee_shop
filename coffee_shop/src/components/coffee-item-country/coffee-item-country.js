import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const CoffeeItemCountry = ({ name, price, src, county }) => {
    return (
        <Card style={{ width: '18rem', margin: '30px' }}>
            <Card.Img variant="top" src={src} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>{county}</ListGroup.Item>
                <ListGroup.Item>{price}</ListGroup.Item>
            </ListGroup>
        </Card>
    )
}

export default CoffeeItemCountry;
