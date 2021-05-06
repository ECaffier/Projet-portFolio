import react from 'react';
import banner from './banner.jpg';
import Navbar from 'react-bootstrap/Navbar'
import {bounce} from 'react-animations'
import styled, {keyframes} from 'styled-components';


const Bounce = styled.div`animation: 2s ${keyframes` ${bounce} `} infinite`;

function Header(){
    return (
        <header>    
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#top">Cafed</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#skills">Compétences</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#projects">Projets</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            <section id="top"className="bannerImg">
                <div className="placementName container">
                    <h1 className="text-center">Caffier Edouard</h1>
                    <p className="text-center">Développeur Web Junior</p>
                </div>
                <div className="placementArrow">
                   <Bounce> <i className="fas fa-chevron-down fa-3x d-flex justify-content-center "></i> </Bounce>
                </div>
            </section>
        </header>
    );
}

export default Header;