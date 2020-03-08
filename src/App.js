import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Youtube from "./Components/Homepage/guide-card.js"
import Nav from './Components/Homepage/nav.js'
import Footer from './Components/Homepage/footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Components/Homepage/slider.js';
// import Appointment from './Components/Homepage/appointment.js'

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Slider /> 
      <div className="cards">
      <Youtube/>
      {/* <Appointment/> */}
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
