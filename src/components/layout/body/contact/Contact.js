import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PhotoCV from './PhotoCV.png'


function Contact(){
    return(
        <div id="contact" className="p-5 bg-darkBlue text-white text-center ">
            <h2 className="p-6">Me contacter</h2>
            <Container>
                <Row>
                    <Col>
                        <h3 className="pb-5">Coordonnées</h3>
                        <ul className="coordList">
                            <li className="p-2">
                                <a href="mailto:Caffier.ed@gmail.com">Caffier.ed@gmail.com</a></li>
                            <li className="p-2">06 89 26 35 45</li>
                            <li className="p-2">
                                <a href="https://github.com/ECaffier" target="_blank">Github</a>
                            </li>
                            <li className="p-2">
                                <a href="https://twitter.com/caffier_edouard" target="_blank">Twitter</a>
                            </li>
                            <li className="p-2">
                                <a href="https://www.linkedin.com/in/edouard-caffier-a7411b18a/" target="_blank">Linkedin</a>
                            </li>

                        </ul>

                    </Col>
                    <Col>
                        <h3 className="pb-5">CV</h3>
                        <Col>
                            <img src={PhotoCV} className="photoCV mb-5" />
                        </Col>
                    <a href={PhotoCV} download>Cliquez pour télécharger</a>
                    </Col>
                </Row>
            </Container>
        </div>
        
    );
}

export default Contact;