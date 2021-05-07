import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Contact(){
    return(
        <div className="p-5 bg-dark text-white text-center">
            <h2 className="p-5">Me contacter</h2>
            <Container>
                <Row>
                    <Col>
                        <p>Saloute</p>
                    </Col>
                    <Col>
                        <p>Salut</p>
                    </Col>
                </Row>
            </Container>
        </div>
        
    );
}

export default Contact;