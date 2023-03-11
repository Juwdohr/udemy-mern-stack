import { Container, Row, Col } from 'react-bootstrap';

const FooterComponent = () => {
    return (
        <footer>
            <Container fluid >
                <Row className="mt-5">
                    <Col className="text-light bg-dark text-center py-5">Copyright &copy; Joshua A. Dix</Col>
                </Row>    
            </Container>
        </footer>
    );
}

export default FooterComponent;