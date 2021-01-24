import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CompanyLogo from './components/CompanyLogo/CompanyLogo';
import Button from './components/Button';

function Home() {
  return (
    <section className="home">
      <header className="header">
        <div>
          <CompanyLogo company="airbnb" shade="f87171" alt="AirBnB" />
        </div>
        <div className="nav-spacer"></div>
        <nav>
          <ul className="top-links">
            <li className="nav-item">Pricing</li>
            <li className="nav-item">About Us</li>
            <li className="nav-item">Support</li>
          </ul>
        </nav>
        <div>
          <Button>Sign Up</Button>
        </div>
      </header>
      <main className="main">
        <h1>This is the actual app that uses the components.</h1>
      </main>
    </section>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
