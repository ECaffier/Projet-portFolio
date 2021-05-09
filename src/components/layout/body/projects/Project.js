import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MemoryGame from './MemoryGame.png';
import JeuPendu from './JeuPendu.png';
import ProjectBanque from './ProjectBanque.png'
import NorImmo from './NorImmo.png'

// On mobile i need to make col = 12 en give space to each card, also adjust card size on mobile.
function Project (){
    return(
        <div id="projects" className="bg-darkGrey textWhite text-center ">
            <h2 className="py-5">Mes Projets</h2>
            <Container>
                <Row>
                    <Col xs={12} lg={6} className="py-5">
                    <div id="wrapper">
                        <h3>Memory game</h3>
                        <a href="https://ecaffier.github.io/jeuMemory/" target='_blank'>
                            <img src={MemoryGame} className="projectImg hover" />
                        </a>
                        <p className="textHover">Un jeu du memory, réalisé en formation à l'AFPA.</p>
                    </div>
                    </Col> 
                    <Col xs={12} lg={6} className="py-5">
                    <div id="wrapper">
                        <a href=" https://ecaffier.github.io/jeupendu/ " target='_blank'>
                            <img src={JeuPendu} className="projectImg hover" /> 
                            </a>
                        <p className="textHover">Un jeu du pendu, réalisé en formation à l'AFPA</p>
                    </div>
                    </Col>   
                    <Col xs={12} lg={6} className="py-5">
                    <div id="wrapper">
                        <a href="https://ecaffier.github.io/Banque_site/" target='_blank'>
                            <img src={ProjectBanque} className="projectImg hover" />
                        </a>
                        <p className="textHover">Un site de banque, réalisé en formation à l'AFPA</p>
                    </div>
                    </Col>   
                    <Col xs={12} lg={6} className="py-5">
                    <div id="wrapper">
                        <a href="https://trobillard.github.io/Norimmo/index.html" target='_blank'>
                            <img src={NorImmo} className="projectImg hover" />
                        </a>
                        <p className="textHover">Un site immobilier, premier projet de groupe en formation à l'AFPA</p>
                    </div>
                    </Col>     
                </Row>
            </Container>
        </div>
    );
}
export default Project;