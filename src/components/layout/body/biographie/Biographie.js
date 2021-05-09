import Container from 'react-bootstrap/Container';


function Biographie(){
    return(
        <div id="biographie" className="p-5 bg-darkGrey textWhite text-center">
            <Container>
                <h2 className="p-5">Biographie</h2>
                <p>Je suis Edouard Caffier, j’ai 26 ans, et je suis actuellement en formation à l’AFPA pour devenir développeur web. Je suis passionné d’informatique et de jeux vidéos. J’aime aussi les mangas, les animés, la cuisine. 
                    J’ai pris du temps à me chercher professionnellement, jusqu’à ce que je découvre le développement web. Cette discipline allie finalement des choses qui me tiennent à cœur : la créativité, et la soif d’apprendre toujours plus.
                    J’aime chercher, inventer, créer.</p>
            </Container>
        </div>
    );
}
export default Biographie;