import React  from 'react';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Education from './components/Education.js';
import Services from './components/Services.js';
import Contact from './components/Contact.js';
import Projects from './components/Projects.js';

function App() {
  return (
    <div className="App" >
      <Navbar />
      <Home />
      <About />
      <Education />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
