import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Homepage from './Components/Homepage/homepage.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Guides from './Components/Guides/guides.js'
import Nav from './Components/Homepage/nav.js'
import Footer from './Components/Homepage/footer.js'
// import Appointment from './Components/Homepage/appointment.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/Guides" component={Guides} />
        <Footer />
      </div>
    </Router>
    
    
  );
}

export default App;
