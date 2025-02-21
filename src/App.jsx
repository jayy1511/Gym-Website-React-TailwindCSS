import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { SignUp } from '@clerk/clerk-react';

// landing pages
import ActivitiyLanding from './landing pages/ActivitiyLanding';
import BuyPlan from './landing pages/BuyPlan';
import ClubLanding from './landing pages/ClubLanding';
import ContactLanding from './landing pages/ContactLanding';
import PlanLanding from './landing pages/PlanLanding';

// other components
import Home from './components/Home';
import Plans from './components/Plans';
import About from './components/About';
import Clubs from './components/Clubs';
import Cont from './components/Cont';
import Activities from './components/Activities';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';

const MainPage = () => (
  <div>
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
  </div>
);

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/landing/activity" element={<ActivitiyLanding />} />
            <Route path="/landing/buy-plan" element={<BuyPlan />} />
            <Route path="/landing/club" element={<ClubLanding />} />
            <Route path="/landing/contact" element={<ContactLanding />} />
            <Route path="/landing/plan" element={<PlanLanding />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
