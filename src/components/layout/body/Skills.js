import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Skills(){
    return(
        <div className="bg-dark text-white fullScreen text-center">
            <h2>Mes compétences</h2>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <div className="roundCard">html 5</div>
                    </Col>
                    <Col className="roundCard ">CSS 3</Col>
                    <Col className="roundCard ">JavaScript</Col>
                    <Col className="roundCard ">React</Col>
                    <Col className="roundCard ">PHP</Col>
                    <Col className="roundCard ">Symfony</Col>
                    <Col className="roundCard ">MySQL</Col>
                    <Col className="roundCard">Git</Col>

                </Row>
            </Container>
        </div>

    );
}

export default Skills;


{/* <div className="bg-dark text-white fullScreen">
<h2 className="text-center">Mes compétences</h2>
<div className="container">
    <ul className="bg-dark row">
        <li className="roundCard text-center col-lg={12}">HTML 5</li>
        <li className="roundCard text-center col-6 offset-6">CSS 3</li>
        <li className="roundCard text-center col-6 offset-6">JavaScript</li>
        <li className="roundCard text-center col-6 offset-6">React</li>
        <li className="roundCard text-center col-6 offset-6">PHP</li>
        <li className="roundCard text-center col-6 offset-6">Symfony</li>
        <li className="roundCard text-center col-6 offset-6">MySQL</li>
        <li className="roundCard text-center col-6 offset-6">Git</li>
    </ul>
</div>
</div> */}
