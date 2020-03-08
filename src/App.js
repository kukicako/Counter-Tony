import React from 'react';
import './App.css';
import HomeCarousel from './components/carousel';
import Nav from './components/nav.js'
import Footer from './components/footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <HomeCarousel />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
