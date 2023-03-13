import {
    Container,
    Row,
    Col,
    Form,
    Button,
    CloseButton,
    Table,
    Alert,
    Image
} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const AdminEditProductPage = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    }

    const onHover = {
        cursor: "pointer",
        position: "absolute",
        left: "5px",
        top: "-10px",
        transform: "scale(2.7)"

    }
    return (
        <Container>
            <Row class="justify-content-md-center mt-5">
                <Col md={1}>
                    <Link to="/admin/products" className="btn btn-info my-3">
                        Go Back
                    </Link>
                </Col>
                <Col md={6}><h1>Edit Product</h1>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" required type="text" defaultValue="Panasonic" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleFrom.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control name="description" required as="textarea" row={3} defaultValue="Product description" />
                        </Form.Group>
                        <Form.Group className="mb-3" corntrolId="formBasicCount">
                            <Form.Label>Count in Stock</Form.Label>
                            <Form.Control name="count" required type="number" defaultValue="2" />
                        </Form.Group>
                        <Form.Group className="mb-3" corntrolId="formBasicPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control name="price" required type="text" defaultValue="$210" />
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

                        <Row className="mt-5">
                            <Col md={6}>
                                <Form.Group calssName="mb-3" controlId="formBasicAttributes">
                                    <Form.Label>Choose Attribute</Form.Label>
                                    <Form.Select
                                        name="attrKey"
                                        aria-label="Default select example"
                                    >
                                        <option>Choose attribute</option>
                                        <option value="color">color</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group calssName="mb-3" controlId="formBasicAttributes">
                                    <Form.Label>Attribute value</Form.Label>
                                    <Form.Select
                                        name="attrKey"
                                        aria-label="Default select example"
                                    >
                                        <option>Choose attribute value</option>
                                        <option value="red">red</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mt-5">
                            <Table hover>
                                <thead>
                                    <tr>
                                        <th>Attribute</th>
                                        <th>Value</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>attr key</td>
                                        <td>attr value</td>
                                        <td><CloseButton /></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Row>

                        <Row className="mt-5">
                            <Col md={6}>
                                <Form.Group calssName="mb-3" controlId="formBasicAttributes">
                                    <Form.Label>Create Attribute</Form.Label>
                                    <Form.Control name="newAttribute" type="text" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group calssName="mb-3" controlId="formBasicAttributes">
                                    <Form.Label>Attribute Value</Form.Label>
                                    <Form.Control name="newAttributeValue" type="text" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Alert variant="primary" className="mt-2">
                            After Typing attribute key and value press enter on one fo the fields
                        </Alert>

                        <Form.Group className="mb-3" corntrolId="formFileMultiple">
                            <Form.Label>Images</Form.Label>
                            <Row>
                                <Col style={{ position:"relative" }} xs={3}>
                                    <Image src="/images/monitors-category.png" fluid />
                                    <i style={onHover} className="bi bi-x text-danger"></i>
                                </Col>
                                <Col style={{ position:"relative" }} xs={3}>
                                    <Image src="/images/monitors-category.png" fluid />
                                    <i style={onHover} className="bi bi-x text-danger"></i>
                                </Col>
                                <Form.Control required name="images" type="file" />
                            </Row>
                        </Form.Group>
                        <Button variant="primary" type="Submit">
                            Update
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default AdminEditProductPage;