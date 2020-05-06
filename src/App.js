import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Homepage from './Components/Homepage/homepage.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Guides from './Components/Guides/guides.js'
import Nav from './Components/Homepage/nav.js'
import Footer from './Components/Homepage/footer.js'
import ScrollToTop from 'react-router-scroll-top'

// Improvement Guides
import AimingHome from './Components/Guides/Improving/AimingHome'
import PuggingHome from './Components/Guides/Improving/PuggingHome'
import MatchmakingHome from './Components/Guides/Improving/MatchmakingHome'
import UtilityImprovingHome from './Components/Guides/Improving/UtilityImprovingHome'
import LeagueHome from './Components/Guides/Improving/LeagueHome'

// AWP Guides
import AwpIntroHome from './Components/Guides/Awping/AwpIntroHome'
import AwarenessAwpHome from './Components/Guides/Awping/AwarenessAwpHome'
import AnglesAwpHome from './Components/Guides/Awping/AnglesAwpHome'

// IGL Guides
import IGLHome from './Components/Guides/InGameLeading/introiglhome'
import RoundAwarenessHome from './Components/Guides/InGameLeading/roundawarenesshome'
import InGameLeadingHome from './Components/Guides/InGameLeading/ingameleadinghome'

// Teachers
import Teachers from './Components/teachers/teachers'
import Redir from './Components/teachers/teacher-redir'

// Blog
import Blog from './Components/Blog/BlogHome'
import BlogHomePage2 from './Components/Blog/BlogHomePage2'

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

        {/* Improvement Guides */}
        <Route exact path="/Aiming" component={AimingHome} />
        <Route exact path="/Pugging" component={PuggingHome} />
        <Route exact path="/Matchmaking" component={MatchmakingHome} />
        <Route exact path="/ImprovingUtility" component={UtilityImprovingHome} />
        <Route exact path="/League" component={LeagueHome} />

        {/* IGL Guides */}
        <Route exact path="/IGLIntroduction" component={IGLHome} />
        <Route exact path="/RoundAwareness" component={RoundAwarenessHome} />
        <Route exact path="/Leader" component={InGameLeadingHome} />

        {/* AWP Guides */}
        <Route exact path="/AWPIntroduction" component={AwpIntroHome} />
        <Route exact path="/AWPAwareness" component={AwarenessAwpHome} />
        <Route exact path="/AWPAngles" component={AnglesAwpHome} />

        {/* Teachers */}
        <Route exact path="/teachers" component={Teachers} />
        <Route exact path="/teachers-red" component={Redir} />

        {/* Blog */}
        <Route exact path="/Blog" component={Blog} />
        <Route exact path="/Blog/Page2" component={BlogHomePage2} />

        {/* Blogs */}
        <Route exact path="/Blogs/EleagueMajor2018" component={Eleague} />

        <Footer />
      </div>
      </ScrollToTop>
    </Router>
    
    
  );
}

export default App;
