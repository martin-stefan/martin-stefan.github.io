import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Work from './components/Work';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Work />
      <Projects />
      <Contact />
      
      <footer>
        <p>Stéfan Martin</p>
        <a href="home">Back to top</a>
      </footer>
    </div>
  );
}

export default App;
