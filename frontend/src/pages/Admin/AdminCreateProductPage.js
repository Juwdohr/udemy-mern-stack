import {
    Container,
    Row,
    Col,
    Form,
    Button
} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const AdminCreateProductPage = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if(form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
    }

    return (
        <Container>
            <Row class="justify-content-md-center mt-5">
                <Col md={1}>
                    <Link to="/admin/products" className="btn btn-info my-3">
                        Go Back
                    </Link>
                </Col>
                <Col md={6}><h1>Create a new Product</h1>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" required type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleFrom.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control name="description" required as="textarea" row={3} />
                        </Form.Group>
                        <Form.Group className="mb-3" corntrolId="formBasicCount">
                            <Form.Label>Count in Stock</Form.Label>
                            <Form.Control name="count" required type="number" />
                        </Form.Group>
                        <Form.Group className="mb-3" corntrolId="formBasicPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control name="price" required type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" corntrolId="formBasicCategory">
                            <Form.Label>Category</Form.Label>
                            <Form.Select required name="category" aria-label="Default select example">
                                <option value="">Choose category</option>
                                <option value="1">Laptops</option>
                                <option value="2">TV</option>
                                <option value="3">Games</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" corntrolId="formFileMultiple">
                            <Form.Label>Images</Form.Label>
                            <Form.Control required name="images" type="file" />
                        </Form.Group>
                        <Button variant="primary" type="Submit">
                            Create
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default AdminCreateProductPage;