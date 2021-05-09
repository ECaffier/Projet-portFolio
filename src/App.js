import logo from './logo.svg';
import './App.css';
import Header from './components/layout/header/Header';
import Project from './components/layout/body/projects/Project';
import Skills from './components/layout/body/skills/Skills';
import Biographie from './components/layout/body/biographie/Biographie';
import Contact from './components/layout/body/contact/Contact'
import Footer from './components/layout/footer/Footer';


//This is the main page, since i'm doing one page with scroll only, all JS function are called like that.
function App() {
  return (
    <div>
      <Header />
      <Project />
      <Skills />
      <Biographie />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
