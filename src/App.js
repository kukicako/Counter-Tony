import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Youtube from "./components/youtube"
import Nav from './components/nav.js'
import Footer from './components/footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './components/slider';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Slider /> 
      <Youtube/>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
