import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { allItems } from '../React-Redux/Action';
import { useDispatch } from 'react-redux';

function ProductCard({ items }) {

    const dispatch = useDispatch();
    
    const addtocart = (items) => {
        dispatch(allItems(items))
        console.log(items)
    }

    return (
        <div>
            {items.length > 0 ?
                <Container>
                    <Row className="justify-content-md-center m-3" >
                        {items.map((items) =>
                            <Col key={items.id}>
                                <Card className='m-2' style={{ width: '18rem', textAlign: 'center' }}>
                                    <Card.Img variant="top" src={items.images[0]} />
                                    <Card.Body>
                                        <Card.Title>{items.title}</Card.Title>
                                        <Card.Title>${items.price}</Card.Title>
                                        <Card.Text>
                                            {items.category}
                                        </Card.Text>
                                        <Button onClick={() => addtocart(items)} variant="primary">ADD TO CART</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )}

                    </Row>
                </Container> : null
            }
        </div>
    );
}

export default ProductCard;