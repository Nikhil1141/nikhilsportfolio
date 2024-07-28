import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Letsconnect from './components/Letsconnect';
import Projects from './components/Projects';
import Qualification from './components/Qualification';
import Skills from './components/Skills';
import Animation from './pages/Animation';

function App() {
  return (
    <div className='app'>
      <Header />
      <Animation />
      <About />
      <Qualification />
      <Skills />
      <Projects />
      <Letsconnect />
      <Footer />
    </div>
  );
}

export default App;
