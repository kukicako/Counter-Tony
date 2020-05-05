import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Homepage from './Components/Homepage/homepage.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Guides from './Components/Guides/guides.js'
import Nav from './Components/Homepage/nav.js'
import Footer from './Components/Homepage/footer.js'
import ScrollToTop from 'react-router-scroll-top'

// Guide Introduction
import WelcomeHome from './Components/Guides/Introduction/WelcomeHome'
import LearnHome from './Components/Guides/Introduction/LearnHome'
import WhoAreWeHome from './Components/Guides/Introduction/WhoAreWeHome'

// Improvement Guides
import AimingHome from './Components/Guides/Improving/AimingHome'
import PuggingHome from './Components/Guides/Improving/PuggingHome'
import MatchmakingHome from './Components/Guides/Improving/MatchmakingHome'
import UtilityImprovingHome from './Components/Guides/Improving/UtilityImprovingHome'
import LeagueHome from './Components/Guides/Improving/LeagueHome'


// IGL Guides
import IGLHome from './Components/Guides/InGameLeading/introiglhome'
import RoundAwarenessHome from './Components/Guides/InGameLeading/roundawarenesshome'
import InGameLeadingHome from './Components/Guides/InGameLeading/ingameleadinghome'

// Understanding Your Role

import AwpHome from './Components/Guides/UnderstandingYourRole/awpinghome'
import SupportHome from './Components/Guides/UnderstandingYourRole/supporthome'
import LurkerHome from './Components/Guides/UnderstandingYourRole/lurkinghome'
import EntryingHome from './Components/Guides/UnderstandingYourRole/entryhome'
import IGLingHome from './Components/Guides/UnderstandingYourRole/iglhome'

// Teachers
import Teachers from './Components/teachers/teachers'

// Blog
import Blog from './Components/Blog/BlogHome'

// Blogs
import Eleague from './Components/Blog/Blogs/eleaguemajor'

function App() {
  return (
    <Router>
      <ScrollToTop>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/Guides" component={Guides} />

        {/* Site Introduction Guides */}
        <Route exact path="/Welcome" component={WelcomeHome} />
        <Route exact path="/Learn" component={LearnHome} />
        <Route exact path="/WhoAreWe" component={WhoAreWeHome} />

        {/* Improvement Guides */}
        <Route exact path="/Aiming" component={AimingHome} />
        <Route exact path="/Pugging" component={PuggingHome} />
        <Route exact path="/Matchmaking" component={MatchmakingHome} />
        <Route exact path="/ImprovingUtility" component={UtilityImprovingHome} />
        <Route exact path="/League" component={LeagueHome} />

        {/* Understanding Your Role */}
        <Route exact path="/AWP" component={AwpHome} />
        <Route exact path="/Support" component={SupportHome} />
        <Route exact path="/Lurker" component={LurkerHome} />
        <Route exact path="/Entry" component={EntryingHome} />
        <Route exact path="/IGL" component={IGLingHome} />

        {/* IGL Guides */}
        <Route exact path="/IGLIntroduction" component={IGLHome} />
        <Route exact path="/RoundAwareness" component={RoundAwarenessHome} />
        <Route exact path="/Leader" component={InGameLeadingHome} />

        {/* Teachers */}
        <Route exact path="/teachers" component={Teachers} />

        {/* Blog */}
        <Route exact path="/Blog" component={Blog} />

        {/* Blogs */}
        <Route exact path="/Blogs/EleagueMajor2018" component={Eleague} />

        <Footer />
      </div>
      </ScrollToTop>
    </Router>
    
    
  );
}

export default App;
