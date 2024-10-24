import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Plans from './components/Plans';
import About from './components/About';
import Clubs from './components/Clubs';
import Cont from './components/Cont';
import Activities from './components/Activities';
import Footer from './components/Footer';



const App = () => {
  return (
    <div> 
      <Navbar />
      
      <main>

        <div id="home">
          <Home />
        </div>

        <div id="subscriptions">
          <Plans />
        </div>

        <div id="activities">
          <Activities />
        </div>

        <div id="clubs">
          <Clubs />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="contact">
          <Cont />
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default App;
