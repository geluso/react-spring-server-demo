import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BootstrapColumns() {
    return <Container>
        <Row>
            <h1>Automatically Spaced Columns</h1>
        </Row>
        <Row>
            <Col className="bordered">1 of 2</Col>
            <Col className="bordered">2 of 2</Col>
        </Row>
        <Row>
            <Col className="bordered">1 of 3</Col>
            <Col className="bordered">2 of 3</Col>
            <Col className="bordered">3 of 3</Col>
        </Row>
        <Row>
            <h1>Manually Spaced Columns with 'xs' prop</h1>
        </Row>
        <Row>
            <Col className="bordered">1 of 3</Col>
            <Col className="bordered" xs={6}>2 of 3 (wider)</Col>
            <Col className="bordered">3 of 3</Col>
        </Row>
        <Row>
            <Col className="bordered" xs={1}>xs=1</Col>
            <Col className="bordered" xs={9}>xs=9</Col>
            <Col className="bordered">auto col</Col>
        </Row>
    </Container>
}

export default BootstrapColumns;