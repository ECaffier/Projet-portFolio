import logo from './logo.svg';
import './App.css';
import Header from './components/layout/header/Header'
import Project from './components/layout/body/Project'
import Skills from './components/layout/body/Skills'
import Footer from './components/layout/footer/Footer'

function App() {
  return (
    <div>
      <Header />
      <Project />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
