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
import UtilityImprovingHome from './Components/Guides/Improving/UtilityImprovingHome'
import BeginnerGuide from './Components/Guides/Improving/BeginnerHome'
import IntermediateGuide from './Components/Guides/Improving/IntermediateHome'
import ExperiencedGuide from './Components/Guides/Improving/ExperiencedHome'
import AdvancedGuide from './Components/Guides/Improving/AdvancedHome'

// Entry Guides
import IntroductionEntryHome from './Components/Guides/Entry/IntroductionEntryHome'
import UnderstandingEntryHome from './Components/Guides/Entry/UnderstandingEntryHome'
import AnglesEntryHome from './Components/Guides/Entry/AnglesEntryHome'
import CommunicationEntryHome from './Components/Guides/Entry/CommunicationEntryHome'
import SpacingEntryHome from './Components/Guides/Entry/SpacingEntryHome'
import TimingEntryHome from './Components/Guides/Entry/TimingEntryHome'

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
      <Nav />
      <div className="App">
        <Route exact path="/" component={Homepage} />
        <Route exact path="/Guides" component={Guides} />

        {/* Improvement Guides */}
        <Route exact path="/Aiming" component={AimingHome} />
        <Route exact path="/ImprovingUtility" component={UtilityImprovingHome} />
        <Route exact path="/BeginnerGuide" component={BeginnerGuide} />
        <Route exact path="/IntermediateGuide" component={IntermediateGuide} />
        <Route exact path="/ExperiencedGuide" component={ExperiencedGuide} />
        <Route exact path="/AdvancedGuide" component={AdvancedGuide} />
        
        {/* Entry Guides */}
        <Route exact path="/IntroductionEntry" component={IntroductionEntryHome} />
        <Route exact path="/UnderstandingEntry" component={UnderstandingEntryHome} />
        <Route exact path="/AnglesEntry" component={AnglesEntryHome} />
        <Route exact path="/CommunicationEntry" component={CommunicationEntryHome} />
        <Route exact path="/SpacingEntry" component={SpacingEntryHome} />
        <Route exact path="/TimingEntry" component={TimingEntryHome} />

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
