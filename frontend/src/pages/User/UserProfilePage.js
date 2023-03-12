import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';

const UserProfilePage = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    }

    const onChange = () => {
        const password = document.querySelector("input[name='password']");
        const confirm = document.querySelector("input[name='confirmPassword']")
        if(confirm.value === password.value) {
            confirm.setCustomValidity("");
        } else {
            confirm.setCustomValidity("Passwords do not match");
        }
    }

    return (
        <Container>
            <Row className="mt-5 justify-content-md-center">
                <Col md={6}>
                    <h1>User Profile Update</h1>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicFirstName">
                            <Form.Label>Your First Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                defaultValue="John"
                                placeholder="Enter your first name"
                                name="firstName"
                            />
                            <Form.Control.Feedback type="invalid">Please enter a name</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicLastName">
                            <Form.Label>Your Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                defaultValue="Doe"
                                placeholder="Enter your last name"
                                name="lastName"
                            />
                            <Form.Control.Feedback type="invalid">Please enter your last name</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                disabled
                                name="email"
                                defaultValue="john@doe.com"
                            />
                            <Form.Text className="text-muted">
                                If you want to change email addresses, please deactivate your account and create a new one with new email address.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your phone number"
                                name="phoneNumber"
                                defaultValue=""
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicAddress">
                            <Form.Label>Address Line 1</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your street address and house number"
                                name="address"
                                defaultValue=""
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicAddress2">
                            <Form.Label>Address Line 2</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Apartment Number"
                                name="addressLine2"
                                defaultValue=""
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCountry">
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your country"
                                name="country"
                                defaultValue=""
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your city"
                                name="city"
                                defaultValue=""
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicState">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your state"
                                name="state"
                                defaultValue=""
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPostalCode">
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your postal code"
                                name="postalCode"
                                defaultValue=""
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                name="password"
                                required
                                type="password"
                                placeholder="Password"
                                minLength={6}
                                onChange={onChange}
                            />
                            <Form.Control.Feedback type="invalid">Please enter a valid password</Form.Control.Feedback>
                            <Form.Text className="text-muted">
                                Password should have at least 6 characters
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Repeat Password</Form.Label>
                            <Form.Control
                                name="confirmPassword"
                                required
                                type="password"
                                placeholder="Repeat Password"
                                minLength={6}
                                onChange={onChange}
                            />
                            <Form.Control.Feedback type="invalid">Both Passwords Should match</Form.Control.Feedback>
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">Update</Button>
                        <Alert show={true} variant="info">
                            User Updated!
                        </Alert>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default UserProfilePage;