import React  from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Education from './Education';
import Services from './Services';
import Contact from './Contact';
import Projects from './Projects';

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
