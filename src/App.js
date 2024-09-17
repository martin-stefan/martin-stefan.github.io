import './App.css';
import Projects from './components/Projects';
import Work from './components/Work';
import Hero from './components/Hero';
import Certs from './components/Certs';
import Contact from './components/Contact';
import { useEffect, useRef } from 'react';
import Skills from './components/Skills';
import Status from './components/Status';

function App() {

  const mouseRef = useRef(null);

  useEffect(() => {
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const handleMouseMove = e => {
      tgX = e.clientX;
      tgY = e.clientY;
    }
    
    document.addEventListener('mousemove', handleMouseMove);
    
    const move = () => {
      curX += (tgX - curX) / 10;
      curY += (tgY - curY) / 10;
      mouseRef.current.style.transform = `translate(${Math.round(curX) - 125}px, ${Math.round(curY) - 125}px)`;
      requestAnimationFrame(move);
    }
    move()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  
  return (
    <div className="App">
      <div ref={mouseRef} id="mouse"></div>

      <div className="app__content">
        <Contact />
        <Status />
        <Certs />
        <Hero />
        <Projects />
        <Work/>
        <Skills/>
      </div>

      <div className="blobs">
        <div className="b1"></div>
      </div>
    </div>
  );
}

export default App;