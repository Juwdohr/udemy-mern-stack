import {
    Row,
    Col,
    Table,
    Button
} from 'react-bootstrap';
import AdminLinksComponent from '../../components/admin/AdminLinksComponent';
import { LinkContainer } from 'react-router-bootstrap'

const deleteHandler = () => {
    if(window.confirm("Are you sure?")) alert("Product Deleted!");
}

const AdminUsersPage = () => {
    return (
        <Row className="m-5">
            <Col md={2}>
                <AdminLinksComponent />
            </Col>
            <Col md={10}>
                <h1>User List</h1>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Is Admin</th>
                            <th>Edit/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            "bi bi-check-lg text-success", "bi bi-x-lg text-danger"
                        ].map((item, idx) => (
                            <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>John</td>
                                <td>Doe</td>
                                <td>john.doe@example.com</td>
                                <td>
                                    <i className={item}></i>
                                </td>
                                <td>
                                    <LinkContainer to="/admin/order-details">
                                        <Button className="btn-sm">
                                            <i className="bi bi-pencil-square"></i>
                                        </Button>
                                    </LinkContainer>
                                    {" / "}
                                    <Button className="btn-sm" variant="danger" onClick={deleteHandler}>
                                        <i className="bi bi-x-circle"></i>
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Col>
        </Row>
    );
}

export default AdminUsersPage;