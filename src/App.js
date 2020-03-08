import React from 'react';
import './App.css';
import HomeCarousel from './components/carousel';
import Nav from './components/nav.js'
import Footer from './components/footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Youtube from "./components/youtube"
import Nav from './Components/nav.js'
import Footer from './Components/footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Components/slider';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Slider /> 
      <Footer />
    </div>
    </Router>
  );
}

export default App;
