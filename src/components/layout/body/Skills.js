import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Skills(){
    return(
        <div id="skills" className="bg-dark text-white text-center">
            <h2 className="pb-5">Mes compétences</h2>
            <Container>
                <Row>
                    <Col xs={4} lg={3} className="py-5">
                        <div className="roundCard valid">HTML 5</div>
                    </Col>
                    <Col xs={4} lg={3} className="py-5">
                        <div className="roundCard valid">CSS 3</div>
                    </Col>
                    <Col xs={4} lg={3} className="py-5">
                        <div className="roundCard valid">JavaScript</div>
                    </Col>
                    <Col xs={4} lg={3} className="py-5">
                        <div className="roundCard valid">React</div>
                    </Col>
                    <Col xs={4} lg={3} className="py-5">
                        <div className="roundCard unValid">PHP</div>
                    </Col>
                    <Col xs={4} lg={3} className="py-5">
                        <div className="roundCard unValid">Symfony</div>
                    </Col>
                    <Col xs={4} lg={3} className="py-5">
                        <div className="roundCard unValid">MySQL</div>
                    </Col>
                    <Col xs={4} lg={3} className="py-5">
                        <div className="roundCard valid">Git</div>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default Skills;
