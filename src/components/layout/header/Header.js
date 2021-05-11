import react from 'react';
import banner from './banner.jpg';
import Navbar from 'react-bootstrap/Navbar'
import {bounce} from 'react-animations'
import styled, {keyframes} from 'styled-components';

// Const to make bounce my arrow
const Bounce = styled.div`animation: 2s ${keyframes` ${bounce} `} infinite`;

// Function with the bootstrap navbar first, then an image as background and some text, finaly an arrow to show u have to scroll down
function Header(){
    return (
        <header >    
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#top">Cafed</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#projects">Projets</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#skills">Compétences</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#biographie">À propos de moi</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#contact">Contact</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            <section id="top"className="bannerImg fullScreen">
                <div className="placementName container">
                    <h1 className="text-center">Caffier Edouard</h1>
                    <h2 className="text-center">Développeur Web Junior</h2>
                </div>
                <div className="placementArrow">
                    <Bounce>
                         <a className="fas fa-chevron-down fa-3x d-flex justify-content-center" href="#projects"></a>
                    </Bounce>
                </div>
            </section>
        </header>
    );
}

export default Header;