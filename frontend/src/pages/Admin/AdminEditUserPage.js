import {
    Container,
    Row,
    Col,
    Form,
    Button
} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const AdminEditUserPage = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    }

    return (
        <Container>
            <Row class="justify-content-md-center mt-5">
                <Col md={1}>
                    <Link to="/admin/user" className="btn btn-info my-3">
                        Go Back
                    </Link>
                </Col>
                <Col md={6}><h1>Edit User</h1>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control name="firstName" required type="text" defaultValue="John" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                name="lastName"
                                required
                                type="text"
                                defaultValue="Doe"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" corntrolId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control disabled name="email" required type="email" defaultValue="john.doe@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" corntrolId="formBasicCheckbox">
                            <Form.Check name="isAdmin" type="checkbox" label="Is Admin" />
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

export default AdminEditUserPage;