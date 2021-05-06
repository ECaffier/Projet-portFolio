import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MemoryGame from './MemoryGame.png'
import ProjectClick from './projectClick'

function Project (){
    return(
        <div id="skills" className="bg-dark text-white text-center">
            <h2 className="pb-5">Mes compétences</h2>
            <Container>
                <Row>
                    <Col xs={4} lg={3} className="py-5">
                        <div>
                            <img onClick={ProjectClick} className="projectImg" src ={MemoryGame} />
                        </div>
                    </Col>
    
                </Row>
            </Container>
        </div>
    );
}
export default Project;