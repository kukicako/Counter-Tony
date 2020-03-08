import React from 'react';
import './App.css';
import HomeCarousel from './Components/carousel';
import Nav from './Components/nav.js'
import Footer from './Components/footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <HomeCarousel />
      <Footer />
    </div>
  );
}

export default App;
