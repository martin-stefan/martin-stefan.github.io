import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Work from './components/Work';
import Hero from './components/Hero';
import { useState, useEffect } from 'react';

function App() {

  const [active, setActive] = useState("home")  

  const handleScroll = (amount) => {
    const pages = ["home", "about", "work", "projects", "contact"]
    let current;

    if (typeof(amount) !== "number") {
      current = Math.floor(Math.abs(window.scrollY / (window.innerHeight - 50)))
    } else {
      current = Math.floor(Math.abs((window.innerHeight * amount) / (window.innerHeight - 50)))
    }
  
    if (pages[current] !== active) {
      setActive(pages[current]);
    }
  }

  const handleMove = (position) => {
    window.scrollTo(0, window.innerHeight * position)
    handleScroll(position)
  }

  useEffect(() => {
    document.addEventListener('wheel', handleScroll);

    return () => {
      document.removeEventListener('wheel', handleScroll);
    };
    }, [window.scrollY]);

  
  return (
    <div className="App">
      <Nav active={active} handleScroll={handleScroll} handleMove={handleMove}/>
      <Hero />
      <About handleMove={handleMove}/>
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