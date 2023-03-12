import {
    Container,
    Row,
    Col,
    Form,
    Alert,
    ListGroup,
    Button
} from 'react-bootstrap'
import CartItemComponent from '../../components/CartItemComponent';

const UserOrderDetailsPage = () => {
    return (
        <Container>
            <Row className="mt-4">
                <h1>Order Details</h1>
                <Col md={8}>
                    <Row>
                        <Col md={6}>
                            <h2>Shipping</h2>
                            <b>Name</b>: John Doe <br />
                            <b>Address</b>: 8739 Mayflower St., Los Angeles, CA 90063<br />
                            <b>Phone</b>: (123) 456-7890
                        </Col>
                        <Col md={6}>
                            <h2>Payment Method</h2>
                            <Form.Select disable={false}>
                                <option value="pp">PayPal</option>
                                <option value="Cash On Delivery (Delivery may be delayed)">Cash On Delivery</option>

                            </Form.Select>
                        </Col>
                        <Row>
                            <Col>
                                <Alert className="mt-3" variant="danger">
                                    Not Delivered
                                </Alert>
                            </Col>
                            <Col>
                                <Alert className="mt-3" variant="success">
                                    Paid on 2022-10-02
                                </Alert>
                            </Col>
                        </Row>
                        <br />
                        <h2>Order Items</h2>
                        <ListGroup variant="flush">
                            {Array.from({ length: 3 }).map((item, idx) => (
                                <CartItemComponent key={idx} />
                            ))}
                        </ListGroup>
                    </Row>
                </Col>
                <Col md={4}>
                    <ListGroup>
                        <ListGroup.Item>
                            <h3>Order Summary</h3>

                        </ListGroup.Item>
                        <ListGroup.Item>
                            Items price (after tax): <span className="fw-bold">$892</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Shipping: <span className="fw-bold">included</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Tax: <span className="fw-bold">included</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="text-danger">
                            Total Price: <span className="fw-bold">$904</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className="d-grid gap-2">
                                <Button size="lg" variant="danger" type="button">
                                    Pay for the order
                                </Button>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default UserOrderDetailsPage;