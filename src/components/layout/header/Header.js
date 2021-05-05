import react from 'react';
import banner from './banner.jpg';

function Header(){
    return (
        <header>
            <section className="bannerImg">
                <div className="placementName container">
                    <h1 className="text-center">Caffier Edouard</h1>
                    <p className="text-center">Développeur Web Junior</p>
                </div>
                <div className="placementArrow">
                    <i className="fas fa-chevron-down fa-5x d-flex justify-content-center "></i>
                </div>
            </section>
        </header>
    );
}

export default Header;