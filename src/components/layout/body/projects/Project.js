import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MemoryGame from './MemoryGame.png'
import ProjectClick from './projectClick'

function Project (){
    return(
        <div id="projects" className="bg-dark text-white text-center fullScreen">
            <h2 className="pb-5">Mes Projets</h2>
            <Container>
                <Row>
                    <Col xs={4} lg={6} className="py-5">
                    <div id="wrapper">
                      <a href="https://ecaffier.github.io/jeuMemory/" target='_blank'> <img src={MemoryGame} className="projectImg hover" /></a>
                        <p className="textHover">Un jeu du memory, réalisé en formation à l'AFPA.</p>
                    </div>
                    </Col> 
                    <Col xs={4} lg={6} className="py-5">
                    <div id="wrapper">
                        <img src={MemoryGame} className="projectImg hover" /> 
                        <p className="textHover">tBLABLABLALBLBLBLBLBLBLBLBLBBLBLBLBLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL</p>
                    </div>
                    </Col>   
                    <Col xs={4} lg={6} className="py-5">
                    <div id="wrapper">
                        <img src={MemoryGame} className="projectImg hover" />
                        <p className="textHover">tBLABLABLALBLBLBLBLBLBLBLBLBBLBLBLBLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL</p>
                    </div>
                    </Col>   
                    <Col xs={4} lg={6} className="py-5">
                    <div id="wrapper">
                        <img src={MemoryGame} className="projectImg hover" />
                        <p className="textHover">tBLABLABLALBLBLBLBLBLBLBLBLBBLBLBLBLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL</p>
                    </div>
                    </Col>     
                </Row>
            </Container>
        </div>
    );
}
export default Project;