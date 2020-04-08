import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Homepage from './Components/Homepage/homepage.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Guides from './Components/Guides/guides.js'
import Nav from './Components/Homepage/nav.js'
import Footer from './Components/Homepage/footer.js'

// Guide Introduction
import WelcomeHome from './Components/Guides/Introduction/WelcomeHome'
import LearnHome from './Components/Guides/Introduction/LearnHome'
import WhoAreWeHome from './Components/Guides/Introduction/WhoAreWeHome'


// IGL Guides
import IGLHome from './Components/Guides/InGameLeading/introiglhome'
import RoundAwarenessHome from './Components/Guides/InGameLeading/roundawarenesshome'

// Teachers
import Teachers from './Components/teachers/teachers'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/Guides" component={Guides} />

        {/* Site Introduction Guides */}
        <Route exact path="/Welcome" component={WelcomeHome} />
        <Route exact path="/Learn" component={LearnHome} />
        <Route exact path="/WhoAreWe" component={WhoAreWeHome} />



        {/* IGL Guides */}
        <Route exact path="/IGLIntroduction" component={IGLHome} />
        <Route exact path="/RoundAwareness" component={RoundAwarenessHome} />

        {/* Teachers */}
        <Route exact path="/teachers" component={Teachers} />

        <Footer />
      </div>
    </Router>
    
    
  );
}

export default App;
