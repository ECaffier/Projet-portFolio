import MemoryGame from './MemoryGame.png';
import JeuPendu from './JeuPendu.png';
import ProjectBanque from './ProjectBanque.png'
import NorImmo from './NorImmo.png'


// Const that works like json array, make me able to create or replace cards in my projects easy
const projectsData =[
    {
        Title : "Memory game",
        Link : "https://ecaffier.github.io/jeuMemory/",
        Image : MemoryGame,
        Detail : "Un jeu du memory, réalisé en formation à l'AFPA.",
        Github : "https://github.com/ECaffier/jeuMemory"
    },
    {
        Title : "Jeu du pendu",
        Link : " https://ecaffier.github.io/jeupendu/",
        Image : JeuPendu,
        Detail : "Un jeu du pendu, réalisé en formation à l'AFPA.",
        Github : "https://github.com/ECaffier/jeupendu"
    },
    {
        Title : "Site de banque",
        Link : "https://ecaffier.github.io/Banque_site/",
        Image : ProjectBanque,
        Detail : "Un site de banque, réalisé en formation à l'AFPA.",
        Github :"https://github.com/ECaffier/Banque_site"
    },
    {
        Title : "Nor'Immo",
        Link : "https://trobillard.github.io/Norimmo/",
        Image : NorImmo,
        Detail : "Un site immobilier, premier projet de groupe en formation à l'AFPA.",
        Github : "https://github.com/trobillard/Norimmo/tree/CeD"
    }

]

export default projectsData;