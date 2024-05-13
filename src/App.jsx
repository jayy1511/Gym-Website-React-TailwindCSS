import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Plans from './components/Plans';

const App = () => {
  return (
    <div> 
      <Navbar />
      
      <main>
        <div id="home">
          <Home />
        </div>

        <div id="plans">
          <Plans />
        </div>
      </main>
    </div>
  );
};

export default App;
