import react from 'react';
import banner from './banner.jpg';

function Header(){
    return (
        <header>
            <section className="bannerImg">
                <div className="placementName">
                    <h1 className="text-center">Caffier Edouard</h1>
                    <p className="text-center">Développeur Web Junior</p>
                    </div>
            </section>
        </header>
    );
}

export default Header;