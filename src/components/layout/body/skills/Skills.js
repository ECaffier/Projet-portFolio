import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Skills(){
    return(
        <div id="skills" className=" bg-darkBlue textWhite text-center">
            <h2 className="py-5">Mes compétences</h2>
            <Container>
                <Row className="skillsBorder">
                    <h3 className="py-3">Maitrisé</h3>
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
                        <div className="roundCard valid">Git</div>
                    </Col>
                </Row>
                <Row className="skillsBorder">
                    <h3 className="py-3">En cours d'apprentissage</h3>
                    <Col xs={4} lg={3} className="py-5">
                        <div className="roundCard validating">React</div>
                    </Col>
                    <Col xs={4} lg={3} className="py-5">
                        <div className="roundCard validating">PHP</div>
                    </Col>
                </Row>
                <Row>
                    <h3 className="py-3">Non maitrisé</h3>
                    <Col xs={4} lg={3} className="py-5">
                        <div className="roundCard unValid">Symfony</div>
                    </Col>
                    <Col xs={4} lg={3} className="py-5">
                        <div className="roundCard unValid">MySQL</div>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default Skills;
